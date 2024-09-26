const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        set:(v) => bcrypt.hashSync(v,bcrypt.genSaltSync(10))
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;