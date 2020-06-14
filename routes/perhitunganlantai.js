let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate
} = require("../controllers/perhitunganlantai.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganlantai", auth)
router.post("/perhitunganlantai", actionCreate)

router.get("/perhitunganlantai/:ProyekId", actionReadAllSingleData)
// router.put("/proyek/:id", actionUpdate)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router