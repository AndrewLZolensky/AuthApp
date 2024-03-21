const Mongoose = require("mongoose");
const localDb = `mongodb://localhost:27017/users_auth`;
const connectDb = async () => {
    await Mongoose.connect(localDb, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("mongodb connected");
}
module.exports = connectDb;