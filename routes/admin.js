let express = require("express")
let router = express.Router()
const {
  viewSignin,
  actionLogin,
  actionLogout

} = require("../controllers/admin.controller")
const auth = require('../middlewares/auth_admin')

router.get("/signin", viewSignin)
router.post("/signin/action", actionLogin)
router.get("/logout", actionLogout)


module.exports = router