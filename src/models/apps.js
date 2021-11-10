const mongoose = require('mongoose')
const { Schema } = mongoose

const eSchema = new Schema({
  _id: String,
  name: String,
  file: String,
  icon: String,
  os: Array
})
module.exports = mongoose.model('apps', eSchema)
