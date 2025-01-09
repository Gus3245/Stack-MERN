const route = require('express').Router();
const userController = require('../Controllers/user.controller');

route.post('/', userController.create);
route.get('/', userController.findAllUsers);
route.get('/:id', userController.findOneById);
route.patch('/:id', userController.findOneAndUpdate);

module.exports = route;