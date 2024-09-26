const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const {secretKey} = require("../secret");
const User = require("../models/user-model");

const authMiddleware = async (req,res,next) => {
    const token = req.header("Authorization");
    if(!token){
        throw createError(401,"Token not found!")
    }
    const jwtToken = token.replace("Bearer", "").trim();
    try {
        const isVerified = jwt.verify(jwtToken,secretKey);
        const userData = await User.findOne({email: isVerified.email}).select({password: 0});

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    }catch (error) {
        next();
    }

}

module.exports = authMiddleware;