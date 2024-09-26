const Service = require("../models/service-model");
const {successResponse} = require("./responseController");
const createError = require("http-errors");
const handleService = async (req,res,next) => {
    try {
        const data = await Service.find({});
        if(!data){
            throw createError(403,"Data not found!")
        }
        return successResponse(res,{
            statusCode: 200,
            message: "Data fetch success!",
            payload: {
                data
            }
        })
    }catch (error) {
        next(error);
    }
}

module.exports = handleService;