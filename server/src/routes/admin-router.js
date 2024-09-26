const express = require("express");
const {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById} = require("../controllers/admin-controller");
const adminRouter = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

adminRouter.get("/users",authMiddleware,adminMiddleware,getAllUsers);
adminRouter.get("/users/:id",authMiddleware,adminMiddleware,getUserById);
adminRouter.get("/contacts",authMiddleware,adminMiddleware,getAllContacts);
adminRouter.delete("/users/delete/:id",authMiddleware,adminMiddleware,deleteUserById);
adminRouter.delete("/contacts/delete/:id",authMiddleware,adminMiddleware,deleteContactById);
adminRouter.patch("/users/update/:id",authMiddleware,adminMiddleware,updateUserById);

module.exports = adminRouter;