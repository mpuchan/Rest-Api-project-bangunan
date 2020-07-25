let express = require("express")
let router = express.Router()
const {
  viewSignin,
  actionLogin,
  actionLogout, viewDashboard, actionKonfirmasi


} = require("../controllers/admin.controller")
const auth = require('../middlewares/auth_admin')
router.get("/admin", viewDashboard)
router.get("/admin/kon/:id", actionKonfirmasi)
router.get("/signin", viewSignin)
router.post("/signin/action", actionLogin)
router.get("/logout", actionLogout)


module.exports = router