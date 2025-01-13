import express from "express";
const route = express.Router();

import JwtMiddleware from "../Middlewares/Jwt.middlewares.js";
import NewsController from "../Controllers/news.Controller.js";

route.post("/",JwtMiddleware.JwtValidation, NewsController.create);
route.get("/", NewsController.findAll);

export default route;