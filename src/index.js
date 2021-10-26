// Dependencies
require('dotenv').config({})
const Captain = require('captainjs');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const database = require('./config/db.js');
const ms = require('ms')
const expressSession = require("express-session");
const passport = require("passport");
require("./auth/passport");
const cors = require('cors')
const isAuth = require('./auth/isAuth')
console = new Captain.Console({
    "use_colors": true,
    "debug": false,
    "format": "§8[§d%time%§8] [%prefix%§8] §7%message%",
    "log_prefix": "§aLog",
    "warn_prefix": "§eWarn",
    "error_prefix": "§cError",
    "info_prefix": "§bInfo",
    "debug_prefix": "§bDebug"
});

// MiddleWares & settings
app.use(cors());
app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/router'));
app.use(express.static(path.join(__dirname, "public")));
const session = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  cookie: {},
  saveUninitialized: false
};
app.use(expressSession(session));
app.use(passport.initialize());
app.use(passport.session());
  app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  });
  const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/auth/login");
  };


// Start Express server
const server = app.listen(app.get("port"), async () => {
    database();
    console.log(`§fPuerto: §9${app.get("port")}`);
})

//routes
app.get('/os',secured, async (req, res) => {
  res.render('os')
})
app.get(
  "/auth/login",
  passport.authenticate("auth0", {
    scope: "email profile",     }),
  (req, res) => {
    res.redirect("/os");
  }
);
app.get("/auth/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/auth/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "/os");
    });
  })(req, res, next);
});
app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect('/')
})