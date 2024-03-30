// require express dependency
const express = require('express');

// create an express router
const router = express.Router();

// pull in register function for registering new user
const {register} = require("./Auth.js");

// handle <POST request to "/register"> with the register() function
router.route("/register").post(register);

// make this router available in other js files (i.e. server.js)
module.exports = router;