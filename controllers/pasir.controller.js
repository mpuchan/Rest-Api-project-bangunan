const { Pasir, Satuan } = require("../models")
const Op = require("sequelize").Op


// /* action view pasir */
exports.viewPasir = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const pasirs = await Pasir.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/pasir/view_pasir", {

        title: "Data Pasir",
        user: userLogin,
        pasir: pasirs,
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

// /* action create pasir */
exports.actionPasirCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    jumlah,
    harga
  } = req.body
  console.log(nama)
  try {
    Pasir.create({
      nama,
      SatuanId,
      jumlah,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Pasir Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/pasir")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/pasir")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit pasir */
exports.actionPasirUpdate = async (req, res) => {
  const { id,
    nama,
    SatuanId,
    jumlah,
    harga } = req.body
  try {
    const updatePasir = await Pasir.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updatePasir.update({
      nama: nama,
      SatuanId: SatuanId,
      jumlah: jumlah,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Pasir dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/pasir")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/pasir")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete pasir */
exports.actionPasirDelete = (req, res) => {
  const { id } = req.params
  Pasir.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(pasir => {
    return pasir.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Pasir dengan nama : ${pasir.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/pasir")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/pasir/view")
    });
}