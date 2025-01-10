import express from "express";
import userRoute from './Source/Routes/user.route.js';
import ConnectDatabase from './Source/Database/database.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.use(express.json());
app.use("/user", userRoute);

const port = process.env.PORT || 3000;

ConnectDatabase();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

