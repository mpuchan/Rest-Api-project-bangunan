const { User } = require("../models")
const bcrypt = require("bcryptjs");
const Op = require("sequelize").Op

exports.viewSignin = (req, res) => {
  const alertMessage = req.flash('alertMessage');
  const alertStatus = req.flash('alertStatus');
  const alert = { message: alertMessage, status: alertStatus };

  if (req.session.user == null || req.session.user == undefined) {
    res.render("login", { action: "false" });
  } else {
    console.log(User)
    res.redirect('/admin')
  }
}

exports.actionLogin = async (req, res) => {

  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: { [Op.eq]: username } } });

  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      req.session.user = {
        id: user.id,
        username: user.username,
        status: user.status
      }

      if (user.status === 1) {
        console.log(User)
        res.redirect("/admin");
      }
    } else {
      req.flash('alertMessage', 'Mohon Maaf Status Anda Belum Aktif!2');
      req.flash('alertStatus', 'danger');
      res.redirect("/signin");
    }
  } else {
    req.flash('alertMessage', 'Username yang Anda Inputkan Salah!');
    req.flash('alertStatus', 'danger');
    res.render("login", { action: "view" });
  }
}

exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signin');
}