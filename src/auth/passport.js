const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
passport.use(new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
      state: true
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  ));
