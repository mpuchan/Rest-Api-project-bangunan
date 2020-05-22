var express = require('express')
var router = express.Router()
let {
    viewJenis,
    actionJenisCreate,
    actionJenisUpdate,
    actionJenisDelete
} = require("../controllers/jenis.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/jenis", viewJenis)
router.post("/admin/jenis/create", actionJenisCreate)
router.post("/admin/jenis/edit", actionJenisUpdate)
router.get("/admin/jenis/delete/:id", actionJenisDelete)



module.exports = router
