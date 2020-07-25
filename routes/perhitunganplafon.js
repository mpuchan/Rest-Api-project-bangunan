let express = require("express")
let router = express.Router()
const {
    actionReadAllSingleData,
    actionCreate, actionUpdate, actionDelete
} = require("../controllers/perhitunganplafon.controller")

const auth = require("../middlewares/auth")

router.use("/perhitunganplafon", auth)
router.post("/perhitunganplafon", actionCreate)

router.get("/perhitunganplafon/:ProyekId", actionReadAllSingleData)
router.put("/perhitunganplafon/:id", actionUpdate)
router.delete("/perhitunganplafon/:id", actionDelete)

module.exports = router