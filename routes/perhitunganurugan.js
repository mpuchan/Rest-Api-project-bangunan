let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate
} = require("../controllers/perhitunganurugan.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganurugan", auth)
router.post("/perhitunganurugan", actionCreate)

router.get("/perhitunganurugan/:ProyekId", actionReadAllSingleData)
// router.put("/proyek/:id", actionUpdate)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDelete)

module.exports = router