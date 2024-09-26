const jwt = require("jsonwebtoken");

const createJSONWebToken = (payload,secretKey,expiresIn) => {
    try {
        return jwt.sign(payload,secretKey,{expiresIn});
    }catch (error) {
        console.error("Failed to  sign jwt", error);
    }
}

module.exports = {createJSONWebToken};