// import mongoose library
const mongoose = require("mongoose");

// mongodb connection string
const MONGODB_URI = "mongodb://127.0.0.1:27017/stardewDB";

const connectDB = async () => {
  try {
    // connect to db
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    // logs errors during connection
    console.error("MongoDB connection failed:", err.message);
  }
};

// export function
module.exports = connectDB;
