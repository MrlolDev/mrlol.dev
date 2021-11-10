const mongoose = require('mongoose')
const { Schema } = mongoose

const eSchema = new Schema({
  _id: String,
  date: Number,
  path: String,
  originalname: String,
  mimetype: String,
  size: Number,
  user: String
})
module.exports = mongoose.model('files', eSchema)
