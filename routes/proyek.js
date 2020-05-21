let express = require("express")
let router = express.Router()
const {
    actionReadAllSinglePengembang,
    actionReadSingleproyek,
    // actionDelete,
    // actionUpdate,
    actionCreate,
    actionDelete
} = require("../controllers/proyek.controller")

const auth = require("../middlewares/auth")

router.use("/proyek", auth)
router.post("/proyek", actionCreate)
router.get("/proyek/:PengembangId", actionReadAllSinglePengembang)
// router.put("/proyek/:id", actionUpdate)
router.delete("/proyek/pengembang/:PengembangId", actionDelete)
// router.delete("/proyek/:id", actionDeleteById)

module.exports = router