import userService from "../Services/user.Service.js";


const create = async (req, res) => {
    try{
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
    } catch (error){
        res.send({message: error.message});
    }
};

const findAllUsers = async (req, res) => {
    try{
        const UserInformation = await userService.findAllService();

        if(UserInformation === 0){
            return res.status(400).send({message: 'No users found'});
        }
        res.status(200).send(UserInformation);
    } catch (error){
        res.send({message: error.message});
    }
};

const findOneById = (req, res) => {
    try{
        const user = req.user;

        res.status(200).send(user);
    } catch (error){
        res.send({message: error.message});
    }
};

const findOneAndUpdate = async (req, res) => {
    try{
        const {name, username, email ,password, avatar, background} = req.body;

        const {id, user} = req;

        await userService.findOneAndUpdateService(id, name, username, email ,password, avatar, background );

        res.send({message: 'User updated successfully'});
    } catch(error){
        res.send({message: error.message});
    }
};

export default { create, findAllUsers, findOneById, findOneAndUpdate };