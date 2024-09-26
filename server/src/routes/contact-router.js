const express = require("express");
const contactRouter = express.Router();
const runValidation = require("../validators/index");
const handleContact = require("../controllers/contact-controller");

contactRouter.post("/contact",handleContact);

module.exports = contactRouter;