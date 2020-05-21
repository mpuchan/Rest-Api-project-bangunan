const { User } = require("../models")
const sha1 = require("sha1")
const Op = require("sequelize").Op
const jwt = require("jsonwebtoken")
const apiConfig = require("../config/api.json")


async function validateLogin(req) {

  let { username, password } = req.body
  let errors = []

  if (!username) {
    errors.push({
      field: "username",
      message: "Username required"
    })
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "Password required"
    })
  }

  if (username && password) {
    const user = await User.findOne({
      where: { username: { [Op.eq]: username } }
    })

    if (!user) {
      errors.push({
        field: "username",
        message: "Username not found"
      })
    } else {
      password = sha1(password + user.salt)
      if (password != user.password) {
        errors.push({
          field: "password",
          message: "Invalid Password"
        })
      }
    }
  }

  return errors
}

exports.actionLogin = async (req, res) => {

  let { username, password } = req.body
  let errors = await validateLogin(req)
  if (errors.length > 0) {
    console.log(errors)
    return res.status(422).json({ message: errors })
  }

  let user = await User.findOne({ where: { username: { [Op.eq]: username } } })

  try {
    let user_ = user.get({ plain: true })
    const accessToken = jwt.sign(user_, apiConfig.key)

    return res.status(200).json({
      message: "Success Login User",
      accessToken,
      user
    })
  } catch (error) {
    console.log(error)
    return res.status(422).json({ field: "jwt", message: error.message })
  }

}
//   if (user) {
//     if (user.status === 1) {
//       const checkPassword = await bcrypt.compare(password, user.password)

//       if (checkPassword) {
//         if (user.role === 1 && user.status === 1) {
//           req.session.user = {
//             id: user.id,
//             name: user.name,
//             username: user.username,
//             email: user.email,
//             notelp: user.notelp,
//             role: user.role,
//             status: user.status
//           }

//           res.redirect("/admin")
//         } else if (user.role === 2 && user.status === 1) {
//           req.session.user = {
//             id: user.id,
//             name: user.name,
//             username: user.username,
//             email: user.email,
//             notelp: user.notelp,
//             role: user.role,
//             status: user.status
//           }
//           res.redirect("/signin")
//         } else {
//           req.flash('alertMessage', 'Mohon Maaf Status Anda Belum Aktif!1');
//           res.redirect("/signin")
//           req.flash('alertStatus', 'danger');
//         }
//       } else {
//         req.flash('alertMessage', 'Password yang Anda Inputkan Salah!');
//         req.flash('alertStatus', 'danger');
//         res.redirect("/signin")
//       }
//     } else {
//       req.flash('alertMessage', 'Mohon Maaf Status Anda Belum Aktif!2');
//       req.flash('alertStatus', 'danger');
//       res.redirect("/signin")
//     }
//   } else {
//     req.flash('alertMessage', 'Username yang Anda Inputkan Salah!');
//     req.flash('alertStatus', 'danger');
//     res.redirect("/signin")
//   }
// }

// exports.actionLogout = async (req, res) => {
//   req.session.destroy()
//   res.redirect('/signin')
// }