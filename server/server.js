const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utility/db");

//Middleware
app.use(express.json());

app.use("/api/auth", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App run successful at port : ${PORT}`);
    });
})