const App = require("../db/models/apps.models");
const { v4: uuidv4 } = require("uuid");

async function createApp(app) {
  var newApp = new App({
    _id: uuidv4(),
    name: app.name,
    icon: app.icon,
    content: app.content,
    approved: false,
  });
  await newApp.save();
  return newApp;
}

async function approveApp(id) {
  var app = await App.findOne({ _id: id }).exec();
  if (!app) return { error: "App not found" };
  app.approved = true;
  await app.save();
  return app;
}

async function getApp(id) {
  var app = await App.findOne({ _id: id }).exec();
  if (!app) return { error: "App not found" };
  return app;
}

async function getApps(filter) {
  var apps = await App.find(filter);
  apps = apps.map((app) => {
    var newApp = {
      id: app._id,
      name: app.name,
      icon: app.icon,
      content: app.content,
      approved: app.approved,
    };
    return newApp;
  });
  return apps;
}

module.exports = {
  getApps,
  getApp,
  approveApp,
  createApp,
};
