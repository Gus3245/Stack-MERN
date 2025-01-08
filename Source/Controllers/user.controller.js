const create = (req, res) => {
    const {name, username, email ,password, avatar, background} = req.body;
    
    if(!name || !username || !email || !password || !avatar || !background){
        return res.status(400).json({message: 'Please provide all the information'});

    }
    res.status(201).send({
        message: 'User created successfully',
        user: {
            name,
            username,
            email,
            avatar,
            background,
        }
    });
};

module.exports = { create };