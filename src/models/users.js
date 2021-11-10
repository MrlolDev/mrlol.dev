const mongoose = require('mongoose')
const { Schema } = mongoose

const eSchema = new Schema({
  _id: String,
  avatar: String,
  nickname: String,
  isAdmin: Boolean
})
module.exports = mongoose.model('users', eSchema)
