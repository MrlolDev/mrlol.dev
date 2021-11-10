const mongoose = require('mongoose')
require('dotenv').config()

module.exports = function db () {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('§9DB §fConnected')
    })
}
