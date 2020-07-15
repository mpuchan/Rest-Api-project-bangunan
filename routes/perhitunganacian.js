let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganacian.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganacian", auth)
router.post("/perhitunganacian", actionCreate)

router.get("/perhitunganacian/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganacian/:id", actionUpdate)
router.delete("/perhitunganacian/:id", actionDelete)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router