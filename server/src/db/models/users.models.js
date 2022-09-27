const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const eSchema = new Schema({
  _id: String,
  username: String,
  pin: String,
  config: Object,
  windows: Array,
  createdAt: Number,
});
eSchema.methods.encryptPassword = (pin) => {
  return bcrypt.hashSync(pin, bcrypt.genSaltSync(10));
};

eSchema.methods.comparePassword = function (pin) {
  return bcrypt.compareSync(pin, this.pin);
};

module.exports = mongoose.model("users", eSchema);
