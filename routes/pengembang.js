let express = require("express")
let router = express.Router()

const {
    actionRegisterMobile,
    actionLogin,
    actionRead,
    actionUpdateStatus,
    actionReadSinglePengembang
} = require("../controllers/pengembang.controller")
const auth = require("../middlewares/auth")

router.post("/pengembang/register", actionRegisterMobile)
router.post("/pengembang/signin", actionLogin)
// router.post("/pengembang/activate/", activateAccount)

router.use("/pengembang", auth)
router.get("/pengembang", actionRead)
router.get("/pengembang/:id", actionReadSinglePengembang)
router.put("/pengembang/status/:id", actionUpdateStatus)

module.exports = router