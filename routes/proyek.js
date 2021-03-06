let express = require("express")
let router = express.Router()
const {
    actionReadAllSinglePengembang,
    actionReadSingleproyek,
    // actionDelete,
    actionUpdate,
    actionCreate,
    actionDelete, actionSearchNamaproyek
} = require("../controllers/proyek.controller")

const auth = require("../middlewares/auth")

router.use("/proyek", auth)
router.post("/proyek", actionCreate)
router.get("/proyek/:PengembangId", actionReadAllSinglePengembang)
router.post("/proyek/:PengembangId", actionSearchNamaproyek)

router.put("/proyek/:id", actionUpdate)
router.delete("/proyek/pengembang/:PengembangId", actionDelete)
router.delete("/proyek/:id", actionDelete)

module.exports = router