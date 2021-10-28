const mongoose = require('mongoose');
const { Schema } = mongoose;

const eSchema = new Schema({
    _id: String,
    url: String,
    allow: Boolean,
    icon: String,
    os: Array
})
module.exports = mongoose.model('apps', eSchema);
