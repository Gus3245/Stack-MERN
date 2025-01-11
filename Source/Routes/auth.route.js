import express from "express";
const route = express.Router();

import authController from "../Controllers/auth.Controller.js";

route.post("/", authController.login);

export default route;