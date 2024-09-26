const bcrypt = require("bcryptjs");
const User = require("../models/user-model");
const createError = require("http-errors");
const {createJSONWebToken} = require("../utilities/jsonwebtoken");
const {secretKey} = require("../secret");
const {successResponse} = require("./responseController");

//User registration
const handleRegister = async (req,res,next) => {
    try {
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email: email});
        if(userExist){
            throw createError(409,"User with this email already exists! Please log in.");
        }
        const data = await User.create({username, email, phone, password});
        const payload = {
            userId:data._id.toString(),
            email:data.email,
            isAdmin:data.isAdmin
        }
        const token = createJSONWebToken(payload,secretKey,'7d');
        const userId = data._id.toString();

        return successResponse(res,{
            statusCode: 201,
            message: "User was registered successfully!",
            payload:{
                data,token,userId
            }
        });
    }catch (error) {
        next(error);
    }
}

//Login
const handleLogin = async (req,res,next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            throw createError(404,"Invalid credentials!");
        }
        const isPasswordMatch = await bcrypt.compareSync(password,user.password);
        if(!isPasswordMatch){
            throw createError(401,"Email/password did not match!");
        }
        const payload = {
            userId:user._id.toString(),
            email:user.email,
            isAdmin:user.isAdmin
        }
        const token = createJSONWebToken(payload,secretKey,'7d');
        const userId = user._id.toString();
        return successResponse(res,{
            statusCode: 200,
            message: "Login successful!",
            payload:{
                token,userId
            }
        });

    }catch (error) {
        next(error);
    }
}

//Get user
const handleGetUser = async (req,res,next) => {
    try {
        const userData = req.user;

        return successResponse(res,{
            statusCode: 200,
            message: "Request successful!",
            payload:{
                userData
            }
        });
    }catch (error) {
        next(error);
    }
}


module.exports = {handleRegister,handleLogin,handleGetUser};