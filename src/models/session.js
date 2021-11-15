const mongoose = require('mongoose')
const { Schema } = mongoose

const eSchema = new Schema({
    _id: String,
    openApps: Array,
})
module.exports = mongoose.model('sessions', eSchema)
