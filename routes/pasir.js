var express = require('express')
var router = express.Router()
let {
  viewPasir,
  actionPasirCreate,
  actionPasirUpdate,
  actionPasirDelete
} = require("../controllers/pasir.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/pasir", viewPasir)
router.post("/admin/pasir/create", actionPasirCreate)
router.post("/admin/pasir/edit", actionPasirUpdate)
router.get("/admin/pasir/delete/:id", actionPasirDelete)



module.exports = router
