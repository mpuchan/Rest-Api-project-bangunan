let express = require('express')
let router = express.Router()

const {
    actionLogin
} = require("../controllers/user.controller")
// const auth = require("../middlewares/auth")
// router.get("/signin", viewSignin)
router.post("/users/signin", actionLogin)
// router.get("/logout", auth.isLogin, actionLogout)

module.exports = router