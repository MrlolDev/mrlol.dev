const mongoose = require('mongoose');
const { Schema } = mongoose;

const eSchema = new Schema({
    _id: String,
    email: String,
    avatar: String,
    created_at: String,
    nickname: String,
})
module.exports = mongoose.model('users', eSchema);
