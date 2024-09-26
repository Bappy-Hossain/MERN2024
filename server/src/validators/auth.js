const { body } = require("express-validator");

const validateUserRegistration = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Name is required! Enter your full name")
    .isLength({ min: 4, max: 31 })
    .withMessage("Name should be between (3-31) characters long!"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required! Enter your email address")
    .isEmail()
    .withMessage("Invalid email address!"),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required! Enter your phone number"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required! Enter your password")
    .isLength({ min: 6 })
    .withMessage("Password should at least 6 characters long!"),
];

const validateUserLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required! Enter your email address")
    .isEmail()
    .withMessage("Invalid email address!"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required! Enter your password")
    .isLength({ min: 6 })
    .withMessage("Password should at least 6 characters long!"),
];

module.exports = { validateUserRegistration, validateUserLogin };
