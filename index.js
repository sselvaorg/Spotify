require("dotenv").config();
const express = require("express");
const connection = require("./db.js");
const app = express();

connection();

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is running on port ${port}`));
