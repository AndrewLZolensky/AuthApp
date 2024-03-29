const Mongoose = require('mongoose');

// define the user schema
const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
})

// create the user model from the user schema
const User = Mongoose.Schema("user", UserSchema);
module.exports = User;