const { Keramik, Satuan } = require("../models")
const Op = require("sequelize").Op


// /* action view keramik */
exports.viewKeramik = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const keramiks = await Keramik.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/keramik/view_keramik", {

        title: "Data Keramik",
        user: userLogin,
        keramik: keramiks,
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


// /* action create keramik */
exports.actionKeramikCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    panjang,
    lebar,
    jumlah,
    harga
  } = req.body
  console.log(nama)
  try {
    Keramik.create({
      nama,
      SatuanId,
      panjang,
      lebar,
      jumlah,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Keramik Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/keramik")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/keramik")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit keramik */
exports.actionKeramikUpdate = async (req, res) => {
  const { id,
    nama,
    panjang,
    lebar,
    jumlah,
    SatuanId,
    harga } = req.body
  try {
    const updateKeramik = await Keramik.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateKeramik.update({
      nama: nama,
      panjang: panjang,
      lebar: lebar,
      jumlah: jumlah,
      SatuanId: SatuanId,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Keramik dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/keramik")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/keramik")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete batako */
exports.actionKeramikDelete = (req, res) => {
  const { id } = req.params
  Keramik.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(keramik => {
    return keramik.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Keramik dengan nama : ${keramik.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/keramik")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/keramik/view")
    });
}