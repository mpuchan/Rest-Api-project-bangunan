var express = require('express')
var router = express.Router()
let {
    viewdaftaradmin,
    actionAdminCreate
} = require("../controllers/superuser.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/superuser", viewdaftaradmin)
router.post("/admin/superuser/create", actionAdminCreate)



module.exports = router
