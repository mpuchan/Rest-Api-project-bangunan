var express = require('express')
var router = express.Router()
let {
    viewdaftaruser, actionResetPassword,
    actionUserUpdate,
    actionUserCreate,
    actionUpdateStatus, actionUserDelete
} = require("../controllers/user.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/user", viewdaftaruser)
router.post("/admin/user/edit/", actionUserUpdate)
router.post("/admin/user/create", actionUserCreate)
router.get("/admin/user/status/:id", actionUpdateStatus)
router.get("/admin/user/reset/:id", actionResetPassword)
router.get("/admin/user/delete/:id", actionUserDelete)



module.exports = router
