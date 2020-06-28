let express = require("express")
let router = express.Router()
const {
    actionReadAllSingleData,
    actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganpengecatan.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganpengecatan", auth)
router.post("/perhitunganpengecatan", actionCreate)

router.get("/perhitunganpengecatan/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganpengecatan/:ProyekId", actionUpdate)
router.delete("/perhitunganpengecatan/:id", actionDelete)

module.exports = router