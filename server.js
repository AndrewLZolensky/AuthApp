const express = require("express"); // import express dependency
const connectDB = require("./db"); // import function to connect to db

// create express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// connect database (async)
connectDB();

// open backend server on port 5000
const PORT = 5000;
server = app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})

// listen for requests made to the "api/auth" path
// send them to the middleware defined in /Auth/Route.js
// that will check for POST request to "/register" sub-route and respond accordingly
app.use("/api/auth", require("./Auth/Route.js"));

// handle uncaught promise rejections
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})