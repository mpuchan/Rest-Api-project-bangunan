const { User } = require("../models")
const Op = require("sequelize").Op
const bcrypt = require("bcryptjs")
// /* action view jenis */
exports.viewprofile = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus }
    const userLogin = req.session.user

    if (userLogin) {
      res.render("admin/profile/profile", {

        title: "Data Profile",
        user: userLogin,
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
exports.actionUpdateProfile = async (req, res) => {
  const {
    id, name,
    email,
    notelp,
    oldpassword,
    newpassword,
    repeatpassword
  } = req.body
  // const { id } = req.params
  // console.log(code)
  try {
    let admin = await User.findOne({
      where: { id: { [Op.eq]: id } }
    })
    if (admin) {
      const checkPassword = await bcrypt.compare(oldpassword, admin.password)
      const files = req.files;
      if (files) {
        if (files.foto.mimetype == "image/jpeg" || files.foto.mimetype == "image/png" || files.foto.mimetype == "image/jpg") {
          await files.foto.mv("public/images/adminprofile/" + files.foto.name, (err) => {
            if (err) return res.status(500).send(err);
          });
        } else {
          req.flash('alertMessage', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
          req.flash('alertStatus', 'danger');
          return res.redirect("/admin/profile");
        }
        if (checkPassword) {
          if (newpassword != repeatpassword) {
            console.error('password tidak sesuai')
          } else {
            const passwordenkrip = bcrypt.hashSync(repeatpassword, 10)
            return admin.update({
              name: name,
              email: email,
              notelp: notelp,
              image: files.foto.name,
              password: passwordenkrip
            }).then(() => {
              req.flash('alertMessage', `Sukses Ubah Data Profile`);
              req.flash('alertStatus', 'success');
              req.session.destroy()
              res.redirect('/signin')
            })
          }
        } else {
          req.flash('alertMessage', 'Mohon Maaf password lama anda salah')
          req.flash('alertStatus', 'danger')
          res.redirect("/admin/profile")
        }




      } else {
        if (checkPassword) {
          if (newpassword != repeatpassword) {
            console.error('password tidak sesuai')
          } else {
            const passwordenkrip = bcrypt.hashSync(repeatpassword, 10)
            return admin.update({
              name: name,
              email: email,
              notelp: notelp,
              password: passwordenkrip
            }).then(() => {
              req.flash('alertMessage', `Sukses Ubah Data Profile`);
              req.flash('alertStatus', 'success');
              req.session.destroy()
              res.redirect('/signin')
            })
          }
        } else {
          req.flash('alertMessage', 'Mohon Maaf password lama anda salah')
          req.flash('alertStatus', 'danger')
          res.redirect("/admin/profile")
        }
      }



    } else {
      req.flash('alertMessage', 'Mohon Maaf password lama anda salah')
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/profile").catch((err) => {
        // tambah notifi error
        res.redirect("/admin/profile");
      });
    }

  } catch (error) {
    console.log(error)
  }
}
