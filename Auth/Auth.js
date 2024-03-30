// pull in user schema
const User = require('../model/User.js');

// define a route to register a new user
exports.register = async (req, res, next) => {
    const { username, password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({message : "password less than 6 characters"});
    }
    try {
        await User.create({
            username,
            password
        }).then(user => {
            res.status(200).json({
                message: "User successfully created",
                user: user
            })
        })
    } catch (err) {
        res.status(401).json({
            message: "User not created",
            error: err.message
        })
    }
}

// define a route to log in
exports.login = async (req, res, next) => {
    const {username, password} = req.body;  // if username or password empty respond with error message
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password left blank"
        })
    }

    try {
        const user = await User.findOne({username, password});  // otherwise look up the user
        if (!user) { // if user does not exsit respond with error message
            res.status(401).json({
                message: "Login not successful",
                error: "User not found"
            })
        } else { // otherwise log in successful
            res.status(200).json({
                message: "Login successful",
                user: user
            })
        }
    } catch (err) { // catch error reading db
        res.status(400).json({
            message: "An error occurred",
            error: err.message
        })
    }
}