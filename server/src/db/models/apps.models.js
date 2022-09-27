const mongoose = require("mongoose");
const { Schema } = mongoose;

const eSchema = new Schema({
  _id: String,
  name: String,
  icon: String,
  content: String,
  approved: Boolean,
});

module.exports = mongoose.model("apps", eSchema);
