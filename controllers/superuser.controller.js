const { User } = require("../models")
const bcrypt = require("bcryptjs")
const Op = require("sequelize").Op
const nodemailer = require('nodemailer')

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
        user1: users,
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
  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const {
    name,
    email,
    notelp,
    username,
    role,
    status
  } = req.body
  console.log(name)
  try {
    const passwordrand = makeid(8)
    const passwordenkrip = bcrypt.hashSync(passwordrand, 10)
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
        subject: 'Hello Your Account Admin Has been created!! ',
        html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
        <h1 align="center">Aplikasi Bangunan Kita</h1>
        <h2>Hai, ${name} akun anda sudah berhasil dibuat berikut detail akun anda !</h2>
        <table>
            <tbody>
                <tr>
                <h4><td><strong>username : </strong></td></h4>
                <h4><td>${username}</td></h4>
                </tr>
                <tr>
                <h4><td><strong>password : </strong></td></h4>
                <h4><td>${passwordrand}</td></h4>
                </tr>
            </tbody
        </table>`
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          return log('Error occurs', err);
        }
        return log('Email sent!!!');
      });
      console.log('Email sent!!!');
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