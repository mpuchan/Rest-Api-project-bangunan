var express = require('express')
var router = express.Router()
let {
    viewBatako,
    actionBatakoCreate,
    actionBatakoUpdate,
    actionBatakoDelete
} = require("../controllers/batako.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/batako", viewBatako)
router.post("/admin/batako/create", actionBatakoCreate)
router.post("/admin/batako/edit", actionBatakoUpdate)
router.get("/admin/batako/delete/:id", actionBatakoDelete)



module.exports = router
