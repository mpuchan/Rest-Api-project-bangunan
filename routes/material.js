var express = require('express')
var router = express.Router()
let {
    viewMaterial,
    actionMaterialCreate,
    actionMaterialUpdate,
    actionMaterialDelete, viewPasir, viewSemen, viewBatako,
    viewSemennat, viewKayu, viewTriplek, viewKeramik, viewCat, viewPlamur, viewBatu, viewBesi, viewLispapan, viewPengikat, viewPaku
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
router.get("/viewBesi", viewBesi)
router.get("/viewLispapan", viewLispapan)
router.get("/viewPengikat", viewPengikat)
router.get("/viewPaku", viewPaku)
router.get("/viewKayu", viewKayu)
router.get("/viewTriplek", viewTriplek)
module.exports = router
