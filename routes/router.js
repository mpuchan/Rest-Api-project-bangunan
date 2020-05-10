var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth_admin')

router.get('/', auth.isLogin, function (req, res, next) {
  res.redirect("/admin")
});

/* GET home page. */
router.get('/admin', auth.isLogin, function (req, res, next) {
  const userLogin = req.session.user

  res.render('admin/dashboard/dashboard', {
    title: "Dashboard",
    user: userLogin
  });
});
module.exports = router