const express = require("express");
const authRouter = express.Router();
const {handleRegister,handleLogin, handleGetUser} = require("../controllers/auth-controller");
const runValidation = require("../validators/index");
const {validateUserRegistration,validateUserLogin} = require("../validators/auth");
const authMiddleware = require("../middleware/auth-middleware");

authRouter.post("/register",validateUserRegistration,runValidation,handleRegister);
authRouter.post("/login",validateUserLogin,runValidation,handleLogin);
authRouter.get("/user",authMiddleware,handleGetUser);

module.exports = authRouter;