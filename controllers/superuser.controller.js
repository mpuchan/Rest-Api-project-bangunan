const { User } = require("../models")
const bcrypt = require("bcryptjs")
const Op = require("sequelize").Op

// /* method view daftar admin */
exports.viewdaftaradmin = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    console.log(userLogin.role)

    if (userLogin.role === 1) {
      const users = await User.findAll()
      res.render("admin/superuser/view_superuser", {

        title: "Data Super User",
        user: userLogin,
        user: users,
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
// /* method create daftar admin */
exports.actionAdminCreate = async (req, res) => {
  const {
    name,
    email,
    notelp,
    username,
    password,
    role,
    status
  } = req.body
  console.log(name)
  try {
    const passwordenkrip = bcrypt.hashSync(password, 10)
    const files = req.files;
    // console.log(files);
    if (!files) {
      req.flash('alertMessage', "Tidak ada Foto yang di Upload, Segera Pilih Foto!");
      req.flash('alertStatus', 'danger');
      return res.redirect("/admin/superuser");
    }

    if (files.foto.mimetype == "image/jpeg" || files.foto.mimetype == "image/png" || files.foto.mimetype == "image/jpg") {
      await files.foto.mv("public/images/adminprofile/" + files.foto.name, (err) => {
        if (err) return res.status(500).send(err);
      });
    } else {
      req.flash('alertMessage', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
      req.flash('alertStatus', 'danger');
      return res.redirect("/register");
    }
    User.create({
      name,
      email,
      notelp,
      username,
      password: passwordenkrip,
      role,
      status,
      image: files.foto.name
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Super User Baru dengan nama : ${name}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/superuser")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/superuser")
    })

  } catch (error) {
    console.log(error)
  }
}

exports.actionUpdateStatus = async (req, res) => {
  let { id } = req.params
  let admin = await User.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  if (admin.status === 1) {
    const user = await User.findOne({
      where: {
        id: { [Op.eq]: admin.id }
      }
    })
    if (user) {
      user.status = 2
      await user.save()
    }
    res.redirect("/admin/superuser")
  } else {
    const user = await User.findOne({
      where: {
        id: { [Op.eq]: admin.id }
      }
    })
    if (user) {
      user.status = 1
      await user.save()

    }
    res.redirect("/admin/superuser")
  }
}