const express = require("express");
const handleService = require("../controllers/service-controller");
const serviceRouter = express.Router();

serviceRouter.get("/service", handleService);

module.exports = serviceRouter;
