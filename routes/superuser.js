var express = require('express')
var router = express.Router()
let {
    viewdaftaradmin,
    actionAdminCreate, actionUpdateStatus
} = require("../controllers/superuser.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/superuser", viewdaftaradmin)
router.post("/admin/superuser/create", actionAdminCreate)
router.get("/admin/superuser/status/:id", actionUpdateStatus)


module.exports = router
