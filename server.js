const express = require("express"); // import express dependency
const connectDB = require("./db"); // import function to connect to db

// create express app
const app = express();

// connect database (async)
connectDB();

// open backend server on port 5000
const PORT = 5000;
server = app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})

// handle uncaught promise rejections
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })