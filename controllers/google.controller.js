const { Pengembang } = require("../models/pengembang");
const Op = require("sequelize").Op;
const passport = require("../passport_auth/passportGmail");

exports.gmail_link = (req, res) => {
  res.render("gmail_link");
};

exports.gmail_success = (req, res) => {
  res.render("gmail_success");
};

exports.gmail_login = passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login", "email"]
});

(exports.gmail_callback = passport.authenticate("google", {
  failureRedirect: "/api/v1/gmail-link"
})),
  function (req, res) {
    res.redirect("/api/v1/auth/gmail-success");
  };
