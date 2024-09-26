const mongoose = require("mongoose");
const {mongoDB} = require("../secret");

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDB);
        console.log("Database connection successful!")
    }catch (error) {
        console.error("Database connection failed!");
        process.exit(0);
    }
}

module.exports = connectDB;