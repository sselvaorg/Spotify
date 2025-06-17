require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db.js");
const userRoutes = require("./routes/user.js");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.user("/api/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is running on port ${port}`));
