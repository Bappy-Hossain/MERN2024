const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const createError = require("http-errors");
const {successResponse} = require("./responseController");

const getAllUsers = async (req,res,next) => {
    try {
        const options = {password: 0};
        const users = await User.find({},options);
        if (!users || users.length === 0){
            throw createError(404,"Users not found!")
        }
        return successResponse(res,{
            statusCode: 200,
            message: "Request Successful!",
            payload: {
                users
            }
        })

    }catch (error) {
        next(error);
    }
}

const getUserById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const options = {password: 0};
        const user = await User.findById({_id: id},options);
        if (!user || user.length === 0){
            throw createError(404,"User not found!")
        }
        return successResponse(res,{
            statusCode: 200,
            message: "Request Successful!",
            payload: {
                user
            }
        })

    }catch (error) {
        next(error);
    }
}

const deleteUserById = async (req,res,next) => {
    try {
        const id = req.params.id;
        if(!id){
            throw createError(404,"Id not found!")
        }
        await User.findByIdAndDelete({_id: id})
        return successResponse(res,{
            statusCode: 200,
            message: "User was deleted successfully!"
        })
    }catch (error) {
        next(error)
    }
}

const updateUserById = async (req,res,next) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const options = {new: true};
        const updateData = await User.findByIdAndUpdate({_id: id},updateUserData, options).select("-password");
        return successResponse(res,{
            statusCode: 200,
            message: "User was updated successfully!",
            payload: {
                updateData
            }
        })
    }catch (error) {
        next(error)
    }
}

const getAllContacts = async (req,res,next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0){
            throw createError(404,"Contacts not found!")
        }
        return successResponse(res,{
            statusCode: 200,
            message: "Request Successful!",
            payload: {
                contacts
            }
        })
    }catch (error) {
        next(error);
    }
}

const deleteContactById = async (req,res,next) => {
    try {
        const id = req.params.id;
        if(!id){
            throw createError(404,"Id not found!")
        }
        await Contact.findByIdAndDelete({_id: id})
        return successResponse(res,{
            statusCode: 200,
            message: "Contacts was deleted successfully!"
        })
    }catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById};