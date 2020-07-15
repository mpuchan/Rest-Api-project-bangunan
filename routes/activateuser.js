let express = require("express")
let router = express.Router()

const {
    activateAccount1
} = require("../controllers/pengembang.controller")
router.get("/activate/activate/status/:email", activateAccount1)
module.exports = router