let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate
} = require("../controllers/perhitunganacian.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganacian", auth)
router.post("/perhitunganacian", actionCreate)

router.get("/perhitunganacian/:ProyekId", actionReadAllSingleData)
// router.put("/proyek/:id", actionUpdate)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router