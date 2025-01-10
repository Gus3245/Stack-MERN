import express from "express";
import ConnectDatabase from './Source/Database/database.js';
import dotenv from "dotenv";

import userRoute from './Source/Routes/user.route.js';
import authRoute from './Source/Routes/auth.route.js';


dotenv.config();
const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 3000;

ConnectDatabase();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

