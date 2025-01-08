const userService = require("../Services/user.services.js");

const create = async (req, res) => {
    const {name, username, email ,password, avatar, background} = req.body;
    
    if(!name || !username || !email || !password || !avatar || !background){
        return res.status(400).json({message: 'Please provide all the information'});
    }

    const user = await userService.create(req.body);

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

module.exports = { create };