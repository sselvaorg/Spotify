require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db.js");
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth.js");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is running on port ${port}`));
