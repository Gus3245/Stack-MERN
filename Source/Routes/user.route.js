const route = require('express').Router();
const userController = require('../Controllers/user.controller');

route.post('/', userController.create);

module.exports = route;