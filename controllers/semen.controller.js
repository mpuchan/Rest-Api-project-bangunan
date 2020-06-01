const { Semen, Satuan } = require("../models")
const Op = require("sequelize").Op


// /* action view semen */
exports.viewSemen = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const semens = await Semen.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/semen/view_semen", {

        title: "Data Semen",
        user: userLogin,
        semen: semens,
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

// /* action create semen */
exports.actionSemenCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    berat,
    jumlah,
    harga
  } = req.body
  console.log(nama)
  try {
    Semen.create({
      nama,
      SatuanId,
      berat,
      jumlah,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Semen Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/semen")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/semen")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit semen */
exports.actionSemenUpdate = async (req, res) => {
  const { id,
    nama,
    SatuanId,
    berat,
    jumlah,
    harga } = req.body
  try {
    const updateSemen = await Semen.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateSemen.update({
      nama: nama,
      SatuanId: SatuanId,
      berat: berat,
      jumlah: jumlah,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Semen dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/semen")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/semen")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete semen */
exports.actionSemenDelete = (req, res) => {
  const { id } = req.params
  Semen.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(semen => {
    return semen.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Semen dengan nama : ${semen.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/semen")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/semen/view")
    });
}