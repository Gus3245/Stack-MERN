import express from "express";
import userRoute from './Source/Routes/user.route.js';
import ConnectDatabase from './Source/Database/database.js';

const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.use(express.json());
app.use("/user", userRoute);

const port = 3000;
const MONGO_PASSWORD = '3lrlyi7GQgu56sfH';

ConnectDatabase();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

