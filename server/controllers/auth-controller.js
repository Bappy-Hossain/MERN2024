const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Homepage
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to this homepage...");
  } catch (error) {
    console.log(error);
  }
};

//Register page
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ msg: "Email already exists!" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "Registration successfull!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Internal server error!");
  }
};

//Login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json("Invalid Credentials!");
    }

    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login successfull!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password!" });
    }
  } catch (error) {
    res.status(500).json("Internal server error!");
  }
};

//Get user
const user = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
