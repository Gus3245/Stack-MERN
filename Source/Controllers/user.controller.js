const userService = require("../Services/user.services.js");

const create = async (req, res) => {
    const {name, username, email ,password, avatar, background} = req.body;
    
    if(!name || !username || !email || !password || !avatar || !background){
        return res.status(400).json({message: 'Please provide all the information'});
    }

    const user = await userService.createService(req.body);

    if(!user){
        return res.status(400).send({message: 'Something went wrong, please try Create Again'});
    }

    res.status(201).send({
        message: 'User created successfully',
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        }
    });
};
const findAllUsers = async (req, res) => {
    const UserInformation = await userService.findAllService();

    if(UserInformation === 0){
        return res.status(400).send({message: 'No users found'});
    }
    res.status(200).send(UserInformation);
};

const findOneById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.findOneByIdService(id);

    if(!user){
        return res.status(400).send({message: 'User not found'});
    }

    res.status(200).send(user);
};

module.exports = { create, findAllUsers, findOneById };