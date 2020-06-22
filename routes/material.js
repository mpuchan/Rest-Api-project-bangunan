var express = require('express')
var router = express.Router()
let {
    viewMaterial,
    actionMaterialCreate,
    actionMaterialUpdate,
    actionMaterialDelete
} = require("../controllers/material.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/material", viewMaterial)
router.post("/admin/material/create", actionMaterialCreate)
router.post("/admin/material/edit", actionMaterialUpdate)
router.get("/admin/material/delete/:id", actionMaterialDelete)


module.exports = router
