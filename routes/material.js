var express = require('express')
var router = express.Router()
let {
    viewMaterial,
    actionMaterialCreate,
    actionMaterialUpdate,
    actionMaterialDelete, viewPasir, viewSemen, viewBatako,
    viewSemennat, viewKeramik, viewCat, viewPlamur, viewBatu
} = require("../controllers/material.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/material", viewMaterial)
router.post("/admin/material/create", actionMaterialCreate)
router.post("/admin/material/edit", actionMaterialUpdate)
router.get("/admin/material/delete/:id", actionMaterialDelete)
router.get("/viewPasir", viewPasir)
router.get("/viewbatako", viewBatako)
router.get("/viewSemen", viewSemen)
router.get("/viewBatu", viewBatu)
router.get("/viewKeramik", viewKeramik)
router.get("/viewSemennat", viewSemennat)
router.get("/viewCat", viewCat)
router.get("/viewPlamur", viewPlamur)


module.exports = router
