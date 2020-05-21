const { Pengembang } = require('../models')
const apiConfig = require("../config/api.json")
const jwt = require("jsonwebtoken")
const Op = require("sequelize").Op
const uniqid = require("uniqid")
const sha1 = require("sha1")

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

  password = sha1(password + salt)

  let pengembangCreate = await Pengembang.create({
    nama,
    email,
    notelp,
    username,
    password,
    salt,
    status: 1
  })

  if (pengembangCreate) {

    errors = await validateLogin(req)
    if (errors.length > 0) return res.status(422).json({ errors })

    let pengembang = await Pengembang.findOne({
      where: {
        username: { [Op.eq]: username },
        status: 1
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
        username: { [Op.eq]: username },
        status: 1
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

/**
 * Verify data user to login
 */
exports.actionLogin = async function (req, res) {
  let { username } = req.body

  let errors = await validateLogin(req)
  if (errors.length > 0) return res.status(422).json({ errors })

  let pengembang = await Pengembang.findOne({
    where: {
      username: { [Op.eq]: username },
      status: 1
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