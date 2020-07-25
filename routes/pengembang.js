let express = require("express")
let router = express.Router()

const {
    actionRegisterMobile,
    actionLogin,
    actionRead,
    actionUpdateStatus,
    actionReadSinglePengembang, actionchangePassword, Forgotpassword, actionUpdateProfile
} = require("../controllers/pengembang.controller")
const auth = require("../middlewares/auth")

router.post("/pengembang/register", actionRegisterMobile)
router.post("/pengembang/signin", actionLogin)
// router.post("/pengembang/activate/", activateAccount)

router.use("/pengembang", auth)
router.get("/pengembang", actionRead)
router.put("/pengembang/:id", actionchangePassword)
router.get("/pengembang/:id", actionReadSinglePengembang)
router.put("/pengembang/updateprofile/:id", actionUpdateProfile)
router.put("/pengembang/status/:id", actionUpdateStatus)
router.put("/forgotpass/:email", Forgotpassword)

module.exports = router