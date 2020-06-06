var express = require('express')
var router = express.Router()
let {
    viewKeramik,
    actionKeramikCreate,
    actionKeramikUpdate,
    actionKeramikDelete
} = require("../controllers/keramik.controller")

const auth = require('../middlewares/auth_admin')

router.get("/admin/keramik", viewKeramik)
router.post("/admin/keramik/create", actionKeramikCreate)
router.post("/admin/keramik/edit", actionKeramikUpdate)
router.get("/admin/keramik/delete/:id", actionKeramikDelete)



module.exports = router
