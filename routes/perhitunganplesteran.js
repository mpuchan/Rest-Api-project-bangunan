let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganplesteran.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganplesteran", auth)
router.post("/perhitunganplesteran", actionCreate)

router.get("/perhitunganplesteran/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganplesteran/:id", actionUpdate)
router.delete("/perhitunganplesteran/:id", actionDelete)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router