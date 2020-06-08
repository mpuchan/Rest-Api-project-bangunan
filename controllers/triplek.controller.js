const { Triplek, Satuan } = require("../models")
const Op = require("sequelize").Op


// /* action view triplek */
exports.viewTriplek = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const tripleks = await Triplek.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/triplek/view_triplek", {

        title: "Data Batako",
        user: userLogin,
        triplek: tripleks,
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


// /* action create batako */
exports.actionTriplekCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    panjang,
    lebar,
    tebal,
    harga
  } = req.body
  console.log(nama)
  try {
    Triplek.create({
      nama,
      SatuanId,
      panjang,
      lebar,
      tebal,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Triplek Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/triplek")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/triplek")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit batako */
exports.actionTriplekUpdate = async (req, res) => {
  const { id,
    nama,
    panjang,
    lebar,
    tebal,
    SatuanId,
    harga } = req.body
  try {
    const updateTriplek = await Triplek.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateTriplek.update({
      nama: nama,
      panjang: panjang,
      lebar: lebar,
      tebal: tebal,
      SatuanId: SatuanId,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Triplek Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/triplek")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/triplek")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete batako */
exports.actionTriplekDelete = (req, res) => {
  const { id } = req.params
  Triplek.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(triplek => {
    return triplek.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Triplek dengan nama : ${triplek.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/triplek")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/triplek/view")
    });
}