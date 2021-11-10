// Dependencies
require("dotenv").config({});
const Captain = require("captainjs");
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const database = require("./config/db.js");
const ms = require("ms");
const { genCustom } = require("@teamloick/key.gen");
const expressSession = require("express-session");
const passport = require("passport");
const fileUpload = require("express-fileupload");
require("./auth/passport");
const Users = require("./models/users");
const cors = require("cors");
console = new Captain.Console({
  use_colors: true,
  debug: false,
  format: "§8[§d%time%§8] [%prefix%§8] §7%message%",
  log_prefix: "§aLog",
  warn_prefix: "§eWarn",
  error_prefix: "§cError",
  info_prefix: "§bInfo",
  debug_prefix: "§bDebug",
});
// models
const OS = require("./models/os");
const Apps = require("./models/apps");
const Files = require("./models/files");
// MiddleWares & settings
app.use(cors());
app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/router"));
app.use(express.static(path.join(__dirname, "public")));
const session = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  cookie: {},
  saveUninitialized: false,
};
app.use(expressSession(session));
app.use(
  fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
  })
);
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
});

// websocket
const io = require("socket.io")(server, {
  cors: {
    origin: "*:*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  socket.on("disconnect", async () => {
    socket.emit("disconnected");
  });
  socket.on("user-connected", async (id) => {
    console.log(`${id} connected`);
  });
});
// routes
// Normal routes
app.get("/os", secured, async (req, res) => {
  const os = await OS.findOne({ _id: req.user.id }).exec();
  var apps = []
  for(var a of os.apps) {
    var app = await Apps.findOne({_id: a}).exec();
    apps.push(app);
  }
  console.log(apps)
  res.render("os", { userID: req.user.id, os: os, apps: apps });
});
app.get("/load/:p", async (req, res) => {
  const { p } = req.params;
  res.render("animations/loader");
});

// Admin routes
app.get("/admin/apps", secured, async (req, res) => {
  const admin = await checkAdmin(req.user.id);
  if (admin === false) return res.redirect("/os");
  var apps = await Apps.find()
  res.render("admin/apps", {apps});
});

app.post("/admin/app/add", secured, async (req, res) => {
  const admin = await checkAdmin(req.user.id);
  if (admin === false) return res.redirect("/os");
  var id = genCustom(24, true, true, true, false);
  var osT = await OS.find({}).exec();
  var osList = [];
  for (let s of osT) {
    var os = await OS.findOne({ _id: s._id }).exec();
    os.apps.push(id);
    os.save()
    osList.push(s._id);
  }
  var sampleFile;
  var uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  sampleFile = req.files.icon;
  var key = genCustom(64, false, true, true, false);
  uploadPath = __dirname + "/public/files/" + key + sampleFile.name;
  if (!sampleFile.mimetype.includes("image/")) {
    removeFile(req.file.path);
    req.json({ error: true, message: "El icono debe ser una imágen" });
    return;
  }
  sampleFile.mv(uploadPath, async function (err) {
    if (err) return res.status(500).send(err);
    var newFile = new Files({
      _id: key,
      date: Date.now(),
      path: "/files/" + key + sampleFile.name,
      originalname: sampleFile.name,
      mimetype: sampleFile.mimetype,
      size: sampleFile.size,
      user: req.user.id,
    });
    newFile.save();
  });
  var newApp = new Apps({
    _id: id,
    name: req.body.name,
    file: "./",
    icon: "/files/" + key + sampleFile.name,
    os: osList,
  });
  newApp.save();
  res.redirect("/admin/apps");
});
// Auth routes
app.get(
  "/auth/login",
  passport.authenticate("auth0", {
    scope: "openid email profile",
    state: { customState: "custom" },
  }),
  (req, res) => {
    res.redirect("/os");
  }
);
app.get("/auth/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user, _info) => {
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
app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

// functions
async function checkAdmin(id) {
  const user = await Users.findOne({ _id: id }).exec();
  if (user.isAdmin === false) return false;
  return true;
}
