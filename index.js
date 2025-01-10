import express from "express";
import userRoute from './Source/Routes/user.route.js';
import ConnectDatabase from './Source/Database/database.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.use(express.json());
app.use("/user", userRoute);

const port = 3000;

const uri = "mongodb://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@stack-mern.xeoki.mongodb.net/?retryWrites=true&w=majority&appName=Stack-Mern";

ConnectDatabase(uri);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

