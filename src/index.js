// Dependencies
require('dotenv').config({})
const Captain = require('captainjs');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const database = require('./config/db.js');
const cors = require('cors')
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


// Start Express server
const server = app.listen(app.get("port"), async () => {
    database();
    console.log(`§fPuerto: §9${app.get("port")}`);
})

