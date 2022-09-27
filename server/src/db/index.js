const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async function connect() {
  await mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    });
};
