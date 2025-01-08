const express = require('express');
const userRoute = require('./Source/Routes/user.route.js');

const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.use('/', userRoute);

app.listen(3000);