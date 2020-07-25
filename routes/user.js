var express = require('express')
var router = express.Router()
let {
    viewDashboard, actionKonfirmasi
} = require("../controllers/user.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/profile", viewDashboard)
router.put("/admin/profile/:id", actionKonfirmasi)



module.exports = router
