const { Satuan } = require("../models")
const Op = require("sequelize").Op

// /* action view satuan */
exports.viewSatuan = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)
    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      res.render("admin/satuan/view_satuan", {

        title: "Data Satuan",
        user: userLogin,
        satuan: satuans,
        alert: alert

      })

    } else {
      req.session.destroy()
      res.redirect('/signin')
    }
  } catch (err) {
    throw err
  }
}

// /* action create satuan */
exports.actionSatuanCreate = async (req, res) => {
  const {
    nama_satuan
  } = req.body
  console.log(nama_satuan)
  try {

    Satuan.create({
      nama_satuan
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Satuan Baru dengan nama : ${nama_satuan}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/satuan")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/satuan")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit satuan */
exports.actionSatuanUpdate = async (req, res) => {
  const { id, nama_satuan } = req.body
  try {
    const updateSatuan = await Satuan.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateSatuan.update({
      nama_satuan: nama_satuan
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Satuan dengan nama : ${nama_satuan}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/satuan")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/satuan")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete satuan */
exports.actionSatuanDelete = (req, res) => {
  const { id } = req.params
  Satuan.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(satuan => {
    return satuan.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Satuan dengan nama : ${satuan.nama_satuan}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/satuan")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/satuan/view")
    });
}