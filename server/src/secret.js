require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDB =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost/27017/MERN2024";
const secretKey = process.env.SECRET_KEY || "jhfguerub_jmjhifgbihi_jjhfdfd";

module.exports = { serverPort, mongoDB, secretKey };
