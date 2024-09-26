const { validationResult } = require("express-validator");

const runValidation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ message: errors.array()[0].msg });
    }
    return next();
  } catch (error) {
    return res.status(400).json("Validation failed");
  }
};

module.exports = runValidation;
