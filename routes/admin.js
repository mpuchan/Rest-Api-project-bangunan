let express = require("express")
let router = express.Router()
const {
  // viewDashboard,
  // login
  viewSignin,
  actionLogin,
  actionLogout
} = require("../controllers/admin.controller");

/* 
  *dashboard
*/
// router.get("/admin/dashboard", viewDashboard);

// router login dan logout
router.get("/signin", viewSignin);
router.post("/signin/action", actionLogin);
router.get("/logout", actionLogout);


module.exports = router