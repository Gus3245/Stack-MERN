import User from "../Models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) => User.findOne({email: email}).select("+password");

const gerenateToken = (id) => jwt.sign({id: id}, process.env.HASH_TOKEN_JWT, {expiresIn: 86400});

export {loginService, gerenateToken};