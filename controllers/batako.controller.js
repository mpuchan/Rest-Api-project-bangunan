const { Batako, Satuan } = require("../models")
const Op = require("sequelize").Op


// /* action view batako */
exports.viewBatako = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const batakos = await Batako.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/batako/view_batako", {

        title: "Data Batako",
        user: userLogin,
        batako: batakos,
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
exports.viewSatuancombo = async (req, res) => {
  try {

    const satuans = await Satuan.findAll()
    res.render("admin/batako/add_modal", {

      satuan: satuans


    })
    console.log(satuans)
  } catch (err) {
    throw err
  }
}


// /* action create batako */
exports.actionBatakoCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    panjang,
    lebar,
    tinggi,
    harga
  } = req.body
  console.log(nama)
  try {
    Batako.create({
      nama,
      SatuanId,
      panjang,
      lebar,
      tinggi,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Batako/Bata Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/batako")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/batako")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit batako */
exports.actionBatakoUpdate = async (req, res) => {
  const { id,
    nama,
    panjang,
    lebar,
    tinggi,
    SatuanId,
    harga } = req.body
  try {
    const updateBatako = await Batako.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateBatako.update({
      nama: nama,
      panjang: panjang,
      lebar: lebar,
      tinggi: tinggi,
      SatuanId: SatuanId,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Batako/Bata dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/batako")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/batako")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete batako */
exports.actionBatakoDelete = (req, res) => {
  const { id } = req.params
  Batako.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(batako => {
    return batako.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Batako/Bata dengan nama : ${batako.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/batako")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/batako/view")
    });
}