import mongoose from "mongoose";
import brcypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }

});
// Brcpyt Encrypty
UserSchema.pre("save", async function (next){
    this.password = await brcypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('User', UserSchema);

export default User;