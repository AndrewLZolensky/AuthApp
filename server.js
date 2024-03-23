const express = require("express");
const connectDB = require("./db")

// create express app
const app = express();

// connect database
connectDB();

// open backend server on port 5000
const PORT = 5000;
server = app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})

// handle uncaught promise rejections
