// Dependencies
require("dotenv").config({});
const Captain = require("captainjs");
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const database = require("./config/db.js");
const ms = require("ms");
const fs = require("fs");
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
const Sessions = require("./models/session");
// MiddleWares & settings
app.use(cors());
app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
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
    console.log("connection disconnected")
  });
  socket.on("user-connected", async (id) => {
    console.log(`${id} connected`);
  });
  socket.on("test", async (msg) => {
    console.log(msg);
  });
  socket.on('app-status', async (user, app) => {
    console.log(app)
    var session = await Sessions.findOne({ _id: user }).exec();
    if(!session) return;
    var appStatus = session.openApps.find(x => x.id === app.id);
    if(!appStatus) {
      session.openApps.push(app);
    } else {
      session.openApps.splice(session.openApps.findIndex(x => x.id === app.id), 1);
      session.openApps.push(app);
    }
    session.save()
  })
});
// routes
// Normal routes
app.get("/os", secured, async (req, res) => {
  const os = await OS.findOne({ _id: req.user.id }).exec();
  await installDefaultApps(req.user.id);
  var session = await Sessions.findOne({_id: req.user.id}).exec();
  if(!session) {
    const newSession = new Sessions({
      _id: req.user.id,
      openApp: [],
    })
    newSession.save()
  }
  var apps = []
  for(var a of os.apps) {
    var app = await Apps.findOne({_id: a}).exec();
    apps.push(app);
  }
  res.render("os", { userID: req.user.id, os: os, apps: apps,session:session });
});
app.get("/load/:p", async (req, res) => {
  const { p } = req.params;
  res.render("animations/loader");
});
app.get("/file/:id", async (req, res) => {
  var id = req.params.id;
  var file = await Files.findOne({ _id: id }).exec();
  if(!file) {
    var fileByPath = await Files.findOne({ path: id }).exec();
    if(!fileByPath) return res.sendStatus(404);
    res.sendFile(path.join(__dirname, `/public/${fileByPath.path}`));
  }
  res.sendFile(path.join(__dirname, `/public/${file.path}`));
})

// Admin routes
app.get("/admin/apps", secured, async (req, res) => {
  const admin = await checkAdmin(req.user.id);
  if (admin === false) return res.redirect("/os");
  var apps = await Apps.find().exec()
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
  uploadPath = __dirname + "/public/files/app/" + key + sampleFile.name;
  var relativePath =`/files/app/${key + sampleFile.name}`
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
      path: relativePath,
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
    icon: relativePath,
    os: osList,
  });
  newApp.save();
  res.redirect("/admin/apps");
});
// Auth routes
app.get("/auth/login",
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
app.get("/auth/logout", async (req, res) => {
  var session = await Sessions.findOne({ _id: req.user.id }).exec();
  if(session) {
    session.openApps = [];
    session.save();
  }
  req.logOut();
  res.redirect("/");
});
app.post("/auth/background", secured, (req, res) => {
  var sampleFile;
  var uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  sampleFile = req.files.background;
  var key = genCustom(64, false, true, true, false);
  uploadPath = __dirname + "/public/files/bg/" + key + sampleFile.name;
  var relativePath =`/files/bg/${key + sampleFile.name}`
  if (!sampleFile.mimetype.includes("image/")) {
    removeFile(req.file.path);
    req.json({ error: 'Background must be an image file.' });
    return;
  }
  sampleFile.mv(uploadPath, async function (err) {
    if (err) return res.status(500).send(err);
    const os = await OS.findOne({ _id: req.user.id }).exec();
    if(os.background.includes("/files/bg")) {
      var oldFile = await Files.findOne({ path: os.background }).exec();
      if(oldFile) {
        removeFile(path.join(__dirname, `public${oldFile.path}`));
        oldFile.remove();
      }
    }
    os.background = relativePath;
    os.save();
    var newFile = new Files({
      _id: key,
      date: Date.now(),
      path: relativePath,
      originalname: sampleFile.name,
      mimetype: sampleFile.mimetype,
      size: sampleFile.size,
      user: req.user.id,
    });
    newFile.save();
  });
  setTimeout(() => {
    res.redirect('/os')
  }, 250);
})

// functions
async function checkAdmin(id) {
  const user = await Users.findOne({ _id: id }).exec();
  if (user.isAdmin === false) return false;
  return true;
}
async function installDefaultApps(id) {
  var defaultAppsID = ['OKwkUNVUE2fIm0dwJJN41xhw', '2AIpQDUhy8eSQrAay4pwiVAR','t61y9kztDqZsZq3lH2UYJ6wK']
  var os = await OS.findOne({ _id: id }).exec();
  var defaultInstalled = 0;
  for(defaultApp of defaultAppsID) {
    for(let ap of os.apps) {
      if(ap === defaultApp) {
        defaultInstalled++;
      }
    }
  }
  if(defaultInstalled === 3) return;
  for(defaultApp of defaultAppsID) {  
      var isInstalled = false;
      if(os.apps.find(x => x === defaultApp)) {
        isInstalled = true;
      }
      if(isInstalled === false) {
        os.apps.push(defaultApp);
      }
  }
  os.save();
}
var removeFile = function (filePath) {
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    return console.log(err);
  }
};
