const UserSchema = require('../Models/User');

const createService = (body) => UserSchema.create(body);
const findAllService = () => UserSchema.find({});
const findOneByIdService = (id) => UserSchema.findById(id);

module.exports = {
    createService,
    findAllService,
    findOneByIdService,
}
