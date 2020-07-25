const { Pengembang, Material } = require("../models")
const bcrypt = require("bcryptjs")
const Op = require("sequelize").Op
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
  res.redirect("/admin")

}
