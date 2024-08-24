const User = require("../models/user-model");

//Homepage
const home = async(req,res) => {
    try {
        res.status(200).send("Welcome to this homepage...")
    } catch (error) {
        console.log(error)
    }
}

//Register page
const register = async(req,res) => {
    try {
        const {username,email,phone,password} = req.body;

        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(400).json({msg: "Email already exists!"})
        }

        const userCreated = await User.create({username,email,phone,password});

        res.status(201).json({
            msg: "Registration successfull!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()});

    } catch (error) {
        res.status(500).json("Internal server error!")
    }
}

module.exports = {home,register};