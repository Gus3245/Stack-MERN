import express from "express";
const route = express.Router();

import NewsController from "../Controllers/news.Controller.js";

route.post("/", NewsController.create);
route.get("/", NewsController.findAll);

export default route;