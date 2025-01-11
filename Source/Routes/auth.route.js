import express from "express";
const route = express.Router();

import authController from "../Controllers/auth.controller.js";

route.post("/", authController.login);

export default route;