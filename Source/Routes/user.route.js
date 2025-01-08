const route = require('express').Router();
const userController = require('../Controllers/user.controller');

route.get('/', userController.soma);

module.exports = route;