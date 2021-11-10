const mongoose = require('mongoose')
const { Schema } = mongoose

const eSchema = new Schema({
  _id: String,
  apps: Array,
  background: String,
  theme: String
})
module.exports = mongoose.model('os', eSchema)
