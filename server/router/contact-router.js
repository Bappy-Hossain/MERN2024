const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contact-controller");

router.post("/contact", contactControllers.contactForm);
module.exports = router;
