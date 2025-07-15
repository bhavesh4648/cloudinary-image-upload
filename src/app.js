require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const imageRoutes = require("./image/routes/image.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

//Connect DB
connectDB();

//Router
app.use("/api/v1/", imageRoutes);

//Error handing
app.use(errorHandler);

module.exports = app;
