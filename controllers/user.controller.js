const { Pengembang, Material } = require("../models")
const nodemailer = require('nodemailer')
const Op = require("sequelize").Op
const uniqid = require("uniqid")
const sha1 = require("sha1");
require('dotenv/config')
exports.viewDashboard = async (req, res) => {
  try {
    const userLogin = req.session.user

    console.log(userLogin)
    if (userLogin) {
      const material = await Material.count()
      const pengembang = await Pengembang.count({
        where: { status: { [Op.eq]: 1 } }
      })
      const confirmpengembang = await Pengembang.count({
        where: { status: { [Op.eq]: 2 } }
      })
      const pengembangs = await Pengembang.findAll({
        where: { status: { [Op.eq]: 2 }, }
      })
      res.render('admin/user/user', {
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

exports.viewdaftaruser = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    if (userLogin) {
      const pengembang = await Pengembang.findAll()
      res.render("admin/user/view_user", {

        title: "Data User",
        user: userLogin,
        pengembangs: pengembang,
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

exports.actionKonfirmasi = async (req, res) => {
  let { id } = req.params
  let pengembang = await Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  if (pengembang) {
    pengembang.status = 1
    await pengembang.save()
  }
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  let mailOptions = {
    from: 'noreplybangunankita@gmail.com',
    to: pengembang.email,
    subject: 'Hello Your Account is already verified ',
    html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
    <h1 align="center">Aplikasi Bangunan Kita</h1>
    <h2>Hai,Akun anda sudah terverifikasi !</h2>
    `
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log('Error occurs', err);
    }
    return log('Email sent!!!');
  });
  console.log('Email sent!!!');
  res.redirect("/admin")


}

exports.actionUserDelete = (req, res) => {
  const { id } = req.params
  Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(pengembang => {
    return pengembang.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data User dengan nama : ${pengembang.nama}`)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/user")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/user/view")
    });
}

exports.actionResetPassword = async (req, res) => {
  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  let { id } = req.params
  let salt = sha1(uniqid())
  const resetpassword = makeid(8)
  password = sha1(resetpassword + salt)

  let pengembang = await Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  if (pengembang) {
    pengembang.password = password
    pengembang.salt = salt
    await pengembang.save()
  }
  req.flash('alertMessage', `Reset Password Berhasil Silahakan Cek Password baru pada email yang bersangkutan`)
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
    to: pengembang.email,
    subject: 'Hello Your Password Has been Successfuly reset ',
    html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
    <h1 align="center">Aplikasi Bangunan Kita</h1>
    <h2>Hai,Password anda sudah berhasil di reset berikut Password baru anda  !</h2>
    <table>
        <tbody>
            <tr>
            <h4><td><strong>password : </strong></td></h4>
            <h4><td>${resetpassword}</td></h4>
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
  res.redirect("/admin/user")

}

exports.actionUserUpdate = async (req, res) => {
  const { id, nama, email, notelp, username } = req.body
  try {
    const updateUser = await Pengembang.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })
    return updateUser.update({
      nama: nama,
      email: email,
      notelp: notelp,
      username: username
    }).then(() => {
      req.flash('alertMessage', `Sukses Ubah Data User dengan nama : ${nama}`)
      req.flash('alertStatus', 'warning')
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
      let mailOptions = {
        from: 'noreplybangunankita@gmail.com',
        to: pengembang.email,
        subject: 'Perubahan data Akun ',
        html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
        <h1 align="center">Aplikasi Bangunan Kita</h1>
        <h2>Hai,Terjadi perubahan data pada akun anda berikut detail perubahan akun anda!</h2>
        <table>
            <tbody>
            <tr>
                <h4><td><strong>Username : </strong></td></h4>
                <h4><td>${username}</td></h4>
                </tr>
                <tr>
                <h4><td><strong>Nama : </strong></td></h4>
                <h4><td>${nama}</td></h4>
                </tr>
                <tr>
                <h4><td><strong>email: </strong></td></h4>
                <h4><td>${email}</td></h4>
                </tr>
                <tr>
                <h4><td><strong>notelp: </strong></td></h4>
                <h4><td>${notelp}</td></h4>
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
      res.redirect("/admin/user")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/user")
    })
  }
  catch (error) {
    console.log(error)
  }
}


exports.actionUserCreate = async (req, res) => {
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
    nama,
    email,
    notelp,
    username
  } = req.body
  try {
    let salt = sha1(uniqid())
    const passwordrand = makeid(8)
    const password = sha1(passwordrand + salt)

    Pengembang.create({
      nama,
      email,
      notelp,
      username,
      password: password,
      salt,
      status: 2
    }).then(() => {
      req.flash('alertMessage', `Data User Baru dengan Nama : ${nama} Berhasil Dibuat Silahkan Cek pada email yang didaftarkan!!`)
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
        subject: 'Hello Your Account Has been created!! ',
        html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
        <h1 align="center">Aplikasi Bangunan Kita</h1>
        <h2>Hai, ${nama} akun anda sudah berhasil dibuat berikut detail akun anda !</h2>
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
      res.redirect("/admin/user")
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/user")
    })

  } catch (error) {
    console.log(error)
  }
}

exports.actionUpdateStatus = async (req, res) => {
  let { id } = req.params
  let pengembang1 = await Pengembang.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  if (pengembang1.status === 1) {
    const pengembang = await Pengembang.findOne({
      where: {
        id: { [Op.eq]: pengembang1.id }
      }
    })
    if (pengembang) {
      pengembang.status = 2
      await pengembang.save()
    }
    req.flash('alertMessage', `Data User dengan Nama : ${pengembang.nama} Telah dinonaktifkan`)
    req.flash('alertStatus', 'warning')
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
    let mailOptions = {
      from: 'noreplybangunankita@gmail.com',
      to: pengembang.email,
      subject: 'Hello Your Account has been suspend ',
      html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
      <h1 align="center">Aplikasi Bangunan Kita</h1>
      <h2>Hai,Akun anda telah di nonaktifkan karena, apabila ingin mengaktifkan akun anda kembali silahkan contact adnmin pada menu pusat bantuan !</h2>
      `
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return log('Error occurs', err);
      }
      return log('Email sent!!!');
    });
    console.log('Email sent!!!');
    res.redirect("/admin/user")
  } else {
    const pengembang = await Pengembang.findOne({
      where: {
        id: { [Op.eq]: pengembang1.id }
      }
    })
    if (pengembang) {
      pengembang.status = 1
      await pengembang.save()
    }
    req.flash('alertMessage', `Data User dengan Nama : ${pengembang.nama} Berhasil di aktifkan`)
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
      to: pengembang.email,
      subject: 'Hello Your Account is already verified ',
      html: `<p align="center"><a href="https://techedusite.blogspot.com" target="_blank" rel="noopener noreferrer"><img width="50" src="https://1.bp.blogspot.com/-HqWPBkUAHWY/XuEG6D4qnyI/AAAAAAAAAkY/zBVNdXiUn5kO5ijFoZkiUWyLgQp3kpmHQCLcBGAsYHQ/s1600/iconapl.png" alt="Bangunan Kita logo"></a></p>
      <h1 align="center">Aplikasi Bangunan Kita</h1>
      <h2>Hai,Akun anda sudah terverifikasi !</h2>
      `
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        // return log('Error occurs', err);
      }
      return log('Email sent!!!');
    });
    console.log('Email sent!!!');
    res.redirect("/admin/user")
  }
}