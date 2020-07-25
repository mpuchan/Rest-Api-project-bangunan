const { Pengembang } = require('../models')
const apiConfig = require("../config/api.json")
require('dotenv/config')
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
const Op = require("sequelize").Op
const uniqid = require("uniqid")
const sha1 = require("sha1");
const { token } = require('morgan');
const { gmail_callback } = require('./google.controller')

/**
 * Validation collection that will be used before create data pengembang
 */

async function validateRegister(req) {
  let {
    nama,
    email,
    notelp,
    username,
    password,
    retypePassword
  } = req.body

  let errors = []

  if (!nama) {
    errors.push({
      field: 'nama',
      message: 'Nama is Required',
    })
  }

  if (!email) {
    errors.push({
      field: 'email',
      message: 'email is Required',
    })
  }

  if (!notelp) {
    errors.push({
      field: 'notelp',
      message: 'Phone Number is Required',
    })
  } else {
    const pengembang = await Pengembang.findOne({
      where: {
        notelp: { [Op.eq]: notelp },
      }
    })
    if (pengembang) {
      errors.push({
        field: 'notelp',
        message: 'Phone Number has been taken',
      })
    }
  }

  if (!username) {
    errors.push({
      field: 'username',
      message: 'Username is Required',
    })
  } else {
    const pengembang = await Pengembang.findOne({
      where: {
        username: { [Op.eq]: username },
      }
    })
    if (pengembang) {
      errors.push({
        field: 'username',
        message: 'Username has been taken',
      })
    }
  }

  if (!password) {
    errors.push({
      field: 'password',
      message: 'Password is Required',
    })
  }

  if (password.length <= 5) {
    errors.push({
      field: 'password',
      message: 'Password must be more than 5 characters',
    })
  }

  if (!retypePassword) {
    errors.push({
      field: 'retypePassword',
      message: 'Password Confirmation is Required',
    })
  }

  if (password && retypePassword) {
    if (password != retypePassword) {
      errors.push({
        field: 'retypePassword',
        message: 'Password Confirmation must be same with Password',
      })
    }
  }
  return errors
}
async function validateEmail(req) {
  /* form validasi mobile  login or signin */
  let email = req.body.email
  let errors = []
  console.log(Pengembang)
  console.log(email)
  if (!email) {
    errors.push({
      field: "email",
      message: "Email required"
    })
  }
  if (email) {
    const pengembang = await Pengembang.findOne({
      where: {
        email: { [Op.eq]: email }
      }
    })

    if (!pengembang) {
      errors.push({
        field: "email",
        message: "Email not found"
      })
    }
  }

  return errors
}
/**
 * Create new data pengembang
 */
exports.actionRegisterMobile = async function (req, res) {
  let {
    nama,
    email,
    notelp,
    username,
    password
  } = req.body
  let salt = sha1(uniqid())
  let errors = await validateRegister(req)
  if (errors.length > 0) return res.status(422).json({ errors })
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: 'noreplybangunankita@gmail.com',
    to: email,
    subject: 'Verifikasi Akun',
    html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
    <h1 align="center">Aplikasi Bangunan Kita</h1>
    <h2>Hai ${username}, to verified your account please click the button below !</h2>
    <h3 align="center"><button align="center" style="background-color:#e63b2b ; border-top-left-radius: 10px; border-top-right-radius: 10px; color: #ffffff;"><a href="http://192.168.43.163:3000/activate/activate/status/${email}"style="color:white;"><h5>Click to verify</h5></a></button><h3>`
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log('Error occurs', err);
    }
    return log('Email sent!!!');
  });
  password = sha1(password + salt)

  let pengembangCreate = await Pengembang.create({
    nama,
    email,
    notelp,
    username,
    password,
    salt,
    status: 2
  })

  if (pengembangCreate) {

    errors = await validateLogin(req)
    if (errors.length > 0) return res.status(422).json({ errors })

    let pengembang = await Pengembang.findOne({
      where: {
        username: { [Op.eq]: username }
        // status: 1
      }
    })

    try {
      let pengembang_ = pengembang.get({ plain: true })
      const accessToken = jwt.sign(pengembang_, apiConfig.key)

      return res.json({
        message: "Success Signup pengembang",
        accessToken,
        pengembangCreate
      })
    } catch (error) {
      return res.status(422).json([{ field: "jwt", message: error.message }])
    }
  }
}

exports.activateAccount1 = async (req, res) => {

  const { email } = req.params
  const alertMessage = req.flash('alertMessage');
  const alertStatus = req.flash('alertStatus');
  const alert = { message: alertMessage, status: alertStatus }
  const updatestatus = await Pengembang.findOne({
    where: {
      email: { [Op.eq]: email }
    }
  })
  if (updatestatus.status === 2) {
    const user = await Pengembang.findOne({
      where: {
        email: { [Op.eq]: updatestatus.email }
      }
    })
    if (user) {
      user.status = 1
      await user.save()
    }
    res.render("activate/activate", { alert: alert })
  }
}

exports.Forgotpassword = async (req, res) => {
  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const { email } = req.params
  const resetpassword = makeid(8)
  // console.log(makeid(8));
  let salt = sha1(uniqid())
  // let errors = await validateEmail(req)
  // if (errors.length > 0) return res.status(422).json({ errors })
  password = sha1(resetpassword + salt)
  const forgotpass = await Pengembang.findOne({
    where: {
      email: { [Op.eq]: email }
    }
  })
  try {
    if (forgotpass) {
      forgotpass.password = password
      forgotpass.salt = salt
      await forgotpass.save()
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });

      let mailOptions = {
        from: 'noreplybangunankita@gmail.com',
        to: email,
        subject: 'Reset Password Successfuly',
        html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
        <h1 align="center">Aplikasi Bangunan Kita</h1>
        <h2>Hai, to verified your account please click the button below !</h2>
        <h3 align="center">your new password : ${resetpassword}<h3>`
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          return log('Error occurs', err);
        }
        return log('Email sent!!!');
      });
    }
    return res.status(201).json({
      message: "Success Update password",
      forgotpass
    })
  } catch (err) {
    console.log(err)
  }

}

/**
 * Validation collection that will be used before login use username
 */

async function validateLogin(req) {
  /* form validasi mobile  login or signin */
  let username = req.body.username
  let password = req.body.password
  let errors = []
  console.log(Pengembang)
  console.log(username)
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
    const peng = await Pengembang.findOne({
      where: {
        username: { [Op.eq]: username }
        // status: 1
      }
    })

    if (!peng) {
      errors.push({
        field: "username",
        message: "Username not found"
      })
    } else {
      password = sha1(password + peng.salt);
      if (password != peng.password) {
        errors.push({
          field: "password",
          message: "Invalid Password"
        })
      }
    }
  }

  return errors
}

exports.actionchangePassword = async function (req, res) {
  const { id } = req.params
  let {
    newpassword
  } = req.body
  let salt = sha1(uniqid())
  let errors = await validateLogin(req)
  if (errors.length > 0) return res.status(422).json({ errors })
  newpassword = sha1(newpassword + salt)
  let pengembang = await Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })

  try {
    if (pengembang) {
      pengembang.password = newpassword
      pengembang.salt = salt
      await pengembang.save()
    }
    return res.status(201).json({
      message: "Success Update password",
      pengembang
    })
  } catch (err) {
    console.log(err)
  }
}


/**
 * Verify data user to login
 */
exports.actionLogin = async function (req, res) {
  let { username } = req.body

  let errors = await validateLogin(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  let pengembang = await Pengembang.findOne({
    where: {
      username: { [Op.eq]: username }
      // status: 1
    }
  })

  try {
    let pengembang_ = pengembang.get({ plain: true })
    const accessToken = jwt.sign(pengembang_, apiConfig.key)
    console.log(accessToken)
    const Objsed = {
      id: pengembang.id,
      username: pengembang.username,
      nama: pengembang.nama,
      email: pengembang.email,
      notelp: pengembang.notelp,
      picture: pengembang.picture,
      status: pengembang.status,
      accessToken
    }
    res.send(JSON.stringify(Objsed))
    // return res.json({
    //   message: "Success Login pengembang",
    //   accessToken,
    //   pengembang
    // });
  } catch (error) {
    return res.status(422).json([{ field: "jwt", message: error.message }])
  }
}

exports.actionRead = async (req, res) => {
  try {
    let pengembang = await Pengembang.findAll()
    return res.json({
      message: "Success Read All Pengembang",
      pengembang
    })
  } catch (err) {
    console.log(err)
  }
}

exports.actionUpdateStatus = async (req, res) => {
  const { id } = req.params
  try {
    const pengembang = await Pengembang.findOne({
      where: { id: { [Op.eq]: id }, }
    })

    if (pengembang.status === 1) {
      pengembang.status = 0
      await pengembang.save();
      return res.status(201).json({
        message: "Success Update Status Nonactive",
        pengembang
      })
    } else {
      pengembang.status = "Active"
      await pengembang.save();
      return res.status(201).json({
        message: "Success Update Status Active",
        pengembang
      })
    }

  } catch (err) {
    console.log(err)
  }
}

exports.actionReadSinglePengembang = async (req, res) => {
  const { id } = req.params

  try {
    const pengembang = await Pengembang.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })

    return res.status(200).json({
      message: "Success Read Single Data Pengembang",
      pengembang
    })
  } catch (err) {
    console.log(err)
  }

}

exports.actionUpdateProfile = async function (req, res) {
  const { id } = req.params
  let {
    nama,
    email,
    notelp,
    username
  } = req.body
  // let errors = await validateRegister(req)
  // if (errors.length > 0) return res.status(422).json({ errors })
  try {
    const pengembang = await Pengembang.findOne({
      where: { id: { [Op.eq]: id } }
    })

    if (pengembang) {
      pengembang.nama = nama
      pengembang.email = email
      pengembang.notelp = notelp
      pengembang.username = username
      await pengembang.save()
    }

    return res.status(201).json({
      message: "Success Update Pengembang",
      pengembang
    })

  } catch (err) {
    console.log(err)
  }
}
