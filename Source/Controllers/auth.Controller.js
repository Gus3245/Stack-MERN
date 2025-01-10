import bcrypt from "bcrypt";
import { loginService } from "../Services/auth.Service.js";

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await loginService(email);

        if(!user){ 
            return res.status(404).send({message: "User or Password not Found"});
        }

        const PasswordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!PasswordIsValid || !user){ 
            return res.status(400).send({message: "Invalid Password or User"});
        }

        res.status(200).send({message: "Login successfully"});

    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export default { login };