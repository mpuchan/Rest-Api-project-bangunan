const { Material, Satuan, Jenis } = require("../models")
const Op = require("sequelize").Op

// /* action view material */
exports.viewMaterial = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const satuans = await Satuan.findAll()
      const jeniss = await Jenis.findAll()
      const materials = await Material.findAll({
        include: [{
          model: Satuan
        }]
      })
      res.render("admin/material/view_material", {

        title: "Data Material",
        user: userLogin,
        material: materials,
        satuan: satuans,
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

// /* action create material */
exports.actionMaterialCreate = async (req, res) => {
  const {
    nama,
    SatuanId,
    JenisId,
    panjang,
    lebar,
    tinggi,
    tebal,
    berat,
    jumlah,
    harga
  } = req.body
  console.log(nama)
  try {
    Material.create({
      nama,
      SatuanId,
      JenisId,
      panjang,
      lebar,
      tinggi,
      tebal,
      berat,
      jumlah,
      harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Material/Bata Baru dengan nama : ${nama}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/material")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/material")
    })

  } catch (error) {
    console.log(error)
  }
}

// /* action edit material */
exports.actionMaterialUpdate = async (req, res) => {
  const { id,
    nama,
    SatuanId,
    JenisId,
    panjang,
    lebar,
    tinggi,
    tebal,
    berat,
    jumlah,
    harga } = req.body
  try {
    const updateMaterial = await Material.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateMaterial.update({
      nama: nama,
      panjang: panjang,
      lebar: lebar,
      tinggi: tinggi,
      SatuanId: SatuanId,
      JenisId: JenisId,
      tebal: tebal,
      berat: berat,
      jumlah: jumlah,
      harga: harga
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data Material/Bata dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      res.redirect("/admin/material")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/material")
    })
  }
  catch (error) {
    console.log(error)
  }
}

// /* action delete material */
exports.actionMaterialDelete = (req, res) => {
  const { id } = req.params
  Material.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(material => {
    return material.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Material/Bata dengan nama : ${material.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/material")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/material/view")
    });
}
