const UserSchema = require('../Models/User');

const createService = (body) => UserSchema.create(body);
const findAllService = () => UserSchema.find({});
const findOneByIdService = (id) => UserSchema.findById(id);

const findOneAndUpdateService = (id, name, username, email ,password, avatar, background) => UserSchema.findOneAndUpdate(
    { _id: id }, 
    { name, username, email, password, avatar, background }
    );


module.exports = {
    createService,
    findAllService,
    findOneByIdService,
    findOneAndUpdateService
}
