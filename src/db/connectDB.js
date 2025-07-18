const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connect successfully");
  } catch (error) {
    console.log("MongoDB connection Error :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
