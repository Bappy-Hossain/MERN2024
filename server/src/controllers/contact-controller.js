const Contact = require("../models/contact-model");
const {successResponse} = require("./responseController");

//Contact form
const handleContact = async (req,res,next) => {
    try {
        const response = req.body;
        await Contact.create(response);

        return successResponse(res,{
            statusCode: 201,
            message: "Message was sent successfully!",
        });
    }catch (error) {
        next(error);
    }
}


module.exports = handleContact;