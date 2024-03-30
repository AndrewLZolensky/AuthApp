// require express dependency
const express = require('express');

// create an express router
const router = express.Router();

// pull in register function for registering new user
const {register, login} = require("./Auth.js");

// handle <POST request to "/register"> with the register() function
router.route("/register").post(register);

// handle <POST to "/login"> with login() function
router.route("/login").post(login);

// make this router available in other js files (i.e. server.js)
module.exports = router;