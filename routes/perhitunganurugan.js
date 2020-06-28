let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganurugan.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganurugan", auth)
router.post("/perhitunganurugan", actionCreate)

router.get("/perhitunganurugan/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganurugan/:ProyekId", actionUpdate)
router.delete("/perhitunganurugan/:id", actionDelete)
// router.put("/proyek/:id", actionUpdate)
// router.delete("/proyek/pengembang/:PengembangId", actionDelete)


module.exports = router