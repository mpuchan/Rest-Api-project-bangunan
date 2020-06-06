const passport = require("passport");
const { Pengembang } = require("../models");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1016680105711-ub3nm4baol8elojm6700fdej0qa2kgmk.apps.googleusercontent.com",
      clientSecret: "d3etjyPmTN2H96LujLGS5g7R",
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
      profileFields: ["id", "emails", "name"]
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      console.log(refreshToken);

      console.log(profile);
      Pengembang.findOne({ where: { email: profile.emails[0].value } })
        .then((pengembang) => {
          if (pengembang) {
            return done(null, pengembang);
          } else {
            Pengembang.create({
              nama: profile.name.givenName,
              email: profile.emails[0].value
            }).then((pengembang) => {
              return done(null, pengembang);
            });
          }
        })
        .catch((err) => {
          return done(err, false);
        });
    }
  )
);

passport.serializeUser(function (pengembang, done) {
  done(null, pengembang.id);
});

passport.deserializeUser(function (id, done) {
  Pengembang.find({ where: { id: id } })
    .then(function (pengembang) {
      done(null, pengembang);
    })
    .catch(function (err) {
      done(err, null);
    });
});

module.exports = passport;
