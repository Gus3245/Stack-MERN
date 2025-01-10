import userController from "../Controllers/user.controller.js";
import {validId, validUser} from "../Middlewares/global.middlewares.js";

import express from "express";
const route = express.Router();

route.post('/', userController.create);
route.get('/', userController.findAllUsers);
route.get('/:id', validId, validUser, userController.findOneById);
route.patch('/:id', validId, validUser, userController.findOneAndUpdate);

export default route;