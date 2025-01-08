const express = require('express');
const userRoute = require('./Source/Routes/user.route.js');
const ConnectDatabase = require('./Source/Database/database.js');
const app = express();

//Routes, //Method Http, Name, Function (Callback)


app.use(express.json());
app.use("/user", userRoute);

const port = 3000;
const MONGO_PASSWORD = '3lrlyi7GQgu56sfH';

ConnectDatabase();

