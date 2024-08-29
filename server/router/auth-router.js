const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.get("/", authControllers.home);
router.post("/register", validate(signupSchema), authControllers.register);
router.post("/login", authControllers.login);

module.exports = router;
