const Mongoose = require("mongoose");

// Define the User schema
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Basic",
    reequired: true
  }
  // Add any other fields you need here
});

// Create the model from the schema
const User = Mongoose.model("User", UserSchema);

module.exports = User;