let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate
} = require("../controllers/perhitunganplesteran.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganplesteran", auth)
router.post("/perhitunganplesteran", actionCreate)

router.get("/perhitunganplesteran/:ProyekId", actionReadAllSingleData)
// router.put("/proyek/:id", actionUpdate)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router