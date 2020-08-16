const { Jenis } = require("../models")
const Op = require("sequelize").Op

// /* action view jenis */
exports.viewJenis = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin)
    if (userLogin) {
      const jeniss = await Jenis.findAll()
      res.render("admin/jenis/view_jenis", {

        title: "Data Jenis",
        user: userLogin,
        jenis: jeniss,
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

// /* action create jenis */
exports.actionJenisCreate = async (req, res) => {
  const {
    nama_jenis
  } = req.body
  console.log(nama_jenis)
  try {

    Jenis.create({
      nama_jenis
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Satuan Baru dengan jenis : ${nama_jenis}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/jenis")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/jenis")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit jenis */
exports.actionJenisUpdate = async (req, res) => {
  const { id, nama_jenis } = req.body
  try {
    const updateJenis = await Jenis.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateJenis.update({
      nama_jenis: nama_jenis
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Jenis dengan nama : ${nama_jenis}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/jenis")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/jenis")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete jenis */
exports.actionJenisDelete = (req, res) => {
  const { id } = req.params
  Jenis.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(jenis => {
    return jenis.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Jenis dengan nama : ${jenis.nama_jenis}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/jenis")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/jenis/view")
    });
}
