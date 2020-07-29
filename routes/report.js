
let express = require("express")
let router = express.Router()
const {
    actionExportSingleData
} = require("../controllers/report.controller")

const auth = require("../middlewares/auth")

router.get("/perhitunganbidang/export/:ProyekId", actionExportSingleData)

// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router
