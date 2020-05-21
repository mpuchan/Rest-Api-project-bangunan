var express = require('express')
var router = express.Router()
let {
    viewSatuan,
    actionSatuanCreate,
    actionSatuanUpdate,
    actionSatuanDelete
} = require("../controllers/satuan.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/satuan", viewSatuan)
router.post("/admin/satuan/create", actionSatuanCreate)
router.post("/admin/satuan/edit", actionSatuanUpdate)
router.get("/admin/satuan/delete/:id", actionSatuanDelete)



module.exports = router
