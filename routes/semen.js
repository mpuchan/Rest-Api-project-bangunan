var express = require('express')
var router = express.Router()
let {
  viewSemen,
  actionSemenCreate,
  actionSemenUpdate,
  actionSemenDelete
} = require("../controllers/semen.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/semen", viewSemen)
router.post("/admin/semen/create", actionSemenCreate)
router.post("/admin/semen/edit", actionSemenUpdate)
router.get("/admin/semen/delete/:id", actionSemenDelete)



module.exports = router
