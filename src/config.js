// Data base connection

const mongoose = require('mongoose');
require('dotenv').config(); 

// useing .envto connect db
const connect = mongoose.connect(process.env.MONGO_URI);

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Database cannot be Connected", err);
})

// Create Schema for the db
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", Loginschema);

module.exports = collection;
