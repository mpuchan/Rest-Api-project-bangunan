let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate, viewBatako, viewPasir, viewSemen, sumtotal, actionUpdate, actionDelete
} = require("../controllers/perhitunganbidang.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganbidang", auth)
router.post("/perhitunganbidang", actionCreate)
router.get("/viewbatako", viewBatako)
router.get("/viewPasir", viewPasir)
router.get("/viewSemen", viewSemen)
router.get("/perhitunganbidang/:ProyekId", actionReadAllSingleData)
router.post("/sumdata/:ProyekId", sumtotal)
router.put("/perhitunganbidang/:ProyekId", actionUpdate)
router.delete("/perhitunganbidang/:id", actionDelete)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router