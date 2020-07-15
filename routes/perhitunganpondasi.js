let express = require("express")
let router = express.Router()
const {
    actionReadAllSingleData,
    actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganpondasi.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganpondasi", auth)
router.post("/perhitunganpondasi", actionCreate)

router.get("/perhitunganpondasi/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganpondasi/:id", actionUpdate)
router.delete("/perhitunganpondasi/:id", actionDelete)

module.exports = router
