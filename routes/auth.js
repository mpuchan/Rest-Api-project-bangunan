var express = require("express");
var router = express.Router();
var passport = require("passport");

// Load controller googleController
const {
  gmail_link,
  gmail_success,
  gmail_login
} = require("../controllers/google.controller");


// GET gmai link
router.get("/gmail-link", gmail_link);
// Get success redirect
router.get("/gmail-success", gmail_success);
// GET /auth/google
router.get("/google", gmail_login);
// GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/v1/gmail-link"
  }),
  function (req, res) {
    res.redirect("/api/v1/auth/gmail-success");
  }
);



module.exports = router;
