const express = require("express");
const connectDB = require("./db")
const app = express();
connectDB();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})