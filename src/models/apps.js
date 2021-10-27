const mongoose = require('mongoose');
const { Schema } = mongoose;

const eSchema = new Schema({
    _id: String,
    url: String,
    allow: Boolean,
    os: Array
})
module.exports = mongoose.model('apps', eSchema);
