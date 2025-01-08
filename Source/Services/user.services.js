const User = require('../Models/User');
const UserSchema = require('../Models/User');

const create = (body) => User.create(body);

module.exports = {
    create,
}
