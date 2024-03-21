const Mongoose = require("mongoose");
const localDB = `mongodb://localhost:27017/users_auth`;
const connectDB = async () => {
    await Mongoose.connect(localDB)
    console.log("mongodb connected");
}
module.exports = connectDB;