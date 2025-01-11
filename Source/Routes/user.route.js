import userController from "../Controllers/user.Controller.js";
import GlobalMiddleware from "../Middlewares/global.middlewares.js";

import express from "express";
const route = express.Router();

route.post('/', userController.create);
route.get('/', userController.findAllUsers);
route.get('/:id', GlobalMiddleware.validId, GlobalMiddleware.validUser, userController.findOneById);
route.patch('/:id', GlobalMiddleware.validId, GlobalMiddleware.validUser, userController.findOneAndUpdate);

export default route;