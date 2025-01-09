const route = require('express').Router();
const userController = require('../Controllers/user.controller');
const {validId, validUser} = require('../Middlewares/global.middlewares.js');

route.post('/', userController.create);
route.get('/', userController.findAllUsers);
route.get('/:id', validId, validUser, userController.findOneById);
route.patch('/:id', validId, validUser, userController.findOneAndUpdate);

module.exports = route;