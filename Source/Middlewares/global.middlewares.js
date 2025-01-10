import userService from "../Services/user.services.js";
import mongoose from "mongoose";

export const validId = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: 'Invalid ID'});
    }
    req.id = id;

    next();
};

export const validUser = async (req, res ,next) => {
    const id = req.params.id;
    const user = await userService.findOneByIdService(id);

    if(!user){
        return res.status(400).send({message: 'User not found'});
    }
    req.user = user;
    req.id = id;

    next();
};

