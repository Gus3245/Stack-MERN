const mongoose = require('mongoose');

const ConnectDatabase = () => {
    console.log("Await Connect to the Database");

    mongoose.connect("mongodb+srv://gustavomoreiradev3245:3lrlyi7GQgu56sfH@stack-mern.xeoki.mongodb.net/?retryWrites=true&w=majority&appName=Stack-Mern",)
    .then(() => console.log("MongoDb Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = ConnectDatabase;