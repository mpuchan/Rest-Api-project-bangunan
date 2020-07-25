const { User, Satuan, Pengembang, Material } = require("../models")
const bcrypt = require("bcryptjs")
const Op = require("sequelize").Op

// /* view Signin admin cheking session */
exports.viewSignin = (req, res) => {
  const alertMessage = req.flash('alertMessage')
  const alertStatus = req.flash('alertStatus')
  const alert = { message: alertMessage, status: alertStatus }

  if (req.session.user == null || req.session.user == undefined) {
    res.render("login", { alert: alert })
  } else {
    console.log(User)
    res.redirect('/admin')
  }
}
exports.viewDashboard = async (req, res) => {
  try {
    const userLogin = req.session.user

    console.log(userLogin)
    if (userLogin) {
      const status = 2;
      const material = await Material.count()
      const pengembang = await Pengembang.count({
        where: { status: { [Op.eq]: 1 } }
      })
      const confirmpengembang = await Pengembang.count({
        where: { status: { [Op.eq]: status } }
      })
      const pengembangs = await Pengembang.findAll({
        where: { status: { [Op.eq]: status }, }
      })
      res.render('admin/dashboard/dashboard', {
        title: "Dashboard",
        user: userLogin,
        material: material,
        pengembang: pengembang,
        pengembang1: pengembangs,
        pengembang2: confirmpengembang
      })
    } else {
      req.session.destroy()
      res.redirect('/signin')
    }
  } catch (err) {
    throw err
  }
}

exports.actionKonfirmasi = async (req, res) => {
  let { id } = req.params
  let pengembang = await Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  if (pengembang.status === 2) {
    const pengembangconfirm = await Pengembang.findOne({
      where: {
        id: { [Op.eq]: pengembang.id }
      }
    })
    if (pengembangconfirm) {
      pengembangconfirm.status = 1
      await pengembangconfirm.save()
    }
    res.redirect("/admin")
  }
}


// /* method Login admin */
exports.actionLogin = async (req, res) => {

  const { username, password } = req.body;
  let user = await User.findOne({ where: { username: { [Op.eq]: username } } })

  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password)

    if (checkPassword) {
      req.session.user = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        notelp: user.notelp,
        image: user.image,
        status: user.status,
        role: user.role,
      }
    } else {
      req.flash('alertMessage', 'Mohon Maaf Username/password anda salah')
      req.flash('alertStatus', 'danger')
      res.redirect("/signin")
    }
    if (user.role === 1 && user.status === 1) {
      console.log(user.status)
      res.redirect("/admin")
    } else if (user.role === 2 && user.status === 1) {
      console.log("Admin")
      res.redirect("/admin")
    } else {
      console.log("Statusmati")
      req.flash('alertMessage', 'Akun anda tidak aktif')
      req.flash('alertStatus', 'danger')
      req.session.destroy()
      res.redirect('/signin')
    }
  } else {
    req.flash('alertMessage', 'Username yang Anda Inputkan Salah!')
    req.flash('alertStatus', 'danger')
    res.render("login", { alert: alert })
  }
}

// /* method logout admin */
exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signin')
}
