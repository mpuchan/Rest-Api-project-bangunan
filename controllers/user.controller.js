const User = require("../models")
const bcrypt = require("bcryptjs")
const Op = require("sequelize").Op

exports.viewSigin = async (req, res) => {
  let coba = "tes"
  if (req.session.user == null || req.session.user == undefined) {
    res.render("login", { coba: coba })
  } else {
    res.redirect('/admin')
  }
}

exports.actionLogin = async (req, res) => {

  const { email, password } = req.body;
  let user = await User.findOne({ where: { email: { [Op.eq]: email } } })

  if (user) {
    if (user.status === "1") {
      const checkPassword = await bcrypt.compare(password, user.password)
      if (checkPassword) {
        if (user.role === "1" && user.status === "1") {
          req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            notelp: user.notelp,
            role: user.role,
            status: user.status
          }
          res.redirect("/admin")
        } else if (user.role === "2" && user.status === "1") {
          req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            notelp: user.notelp,
            role: user.role,
            status: user.status
          }
          res.redirect("/pengembang")
        } else {
          res.redirect("/signin")
        }
      } else {
        res.redirect("/signin")
      }
    } else {
      res.redirect("/signin")
    }
  } else {
    res.redirect("/signin")
  }
}

exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signin')
}