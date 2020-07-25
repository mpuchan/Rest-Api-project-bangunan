var express = require('express')
var router = express.Router()
let {
    viewprofile, actionUpdateProfile
} = require("../controllers/changeprofile.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/profile", viewprofile)
router.post("/admin/profile/:id", actionUpdateProfile)



module.exports = router
