var express = require('express')
var router = express.Router()
let {
    viewTriplek,
    actionTriplekCreate,
    actionTriplekUpdate,
    actionTriplekDelete
} = require("../controllers/triplek.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/triplek", viewTriplek)
router.post("/admin/triplek/create", actionTriplekCreate)
router.post("/admin/triplek/edit", actionTriplekUpdate)
router.get("/admin/triple/delete/:id", actionTriplekDelete)



module.exports = router
