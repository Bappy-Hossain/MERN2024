const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const authRouter = require("./src/routes/auth-router");
const adminRouter = require("./src/routes/admin-router");
const contactRouter = require("./src/routes/contact-router");
const serviceRouter = require("./src/routes/service-router");
const { errorResponse } = require("./src/controllers/responseController");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routing implement
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);

//Client error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found!"));
});

//Server error handling
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
