const cors = require('cors')
const express = require("express");
const path = require('path');
const conn = require("./config/db");
const app = express();

const PORT = process.env.PORT || 5000;
require("dotenv").config();
const todoRouter = require("./routers/todo.route");
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Type route name to get data");
});
app.use("/todo", todoRouter);

app.listen(PORT, async () => {
  await conn;
  console.log(`Server running on ${PORT}`);
});
