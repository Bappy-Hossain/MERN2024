const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utility/db");
const errorMiddleware = require("./middlewares/error-middleware");

//Middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App run successful at port : ${PORT}`);
  });
});
