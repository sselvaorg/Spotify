const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected to DB successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
