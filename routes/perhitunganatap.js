let express = require("express")
let router = express.Router()
const {
    actionReadAllSingleData,
    actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganatap.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganatap", auth)
router.post("/perhitunganatap", actionCreate)

router.get("/perhitunganatap/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganatap/:id", actionUpdate)
router.delete("/perhitunganatap/:id", actionDelete)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router