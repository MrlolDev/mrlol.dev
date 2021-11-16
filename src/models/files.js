const mongoose = require('mongoose')
const { Schema } = mongoose
const searchable = require("mongoose-regex-search");

const eSchema = new Schema({
  _id: String,
  date: Number,
  path: String,
  originalname: {type: String, searchable: true},
  mimetype: {type: String, searchable: true},
  size: Number,
  user: String
})

eSchema.plugin(searchable);
module.exports = mongoose.model('files', eSchema)
