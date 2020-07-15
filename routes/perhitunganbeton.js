let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleData,
  actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganbeton.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganbeton", auth)
router.post("/perhitunganbeton", actionCreate)

router.get("/perhitunganbeton/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganbeton/:id", actionUpdate)
router.delete("/perhitunganbeton/:id", actionDelete)

module.exports = router
