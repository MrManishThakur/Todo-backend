require("dotenv").config();
const mongoose = require("mongoose");
const conn = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("error"));
module.exports = conn;