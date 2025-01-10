import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://gustavomoreiradev3245:3lrlyi7GQgu56sfH@stack-mern.xeoki.mongodb.net/?retryWrites=true&w=majority&appName=Stack-Mern";

async function ConnectDatabase() {
    console.log("Await Connect to the Database");

    await mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDb Atlas Connected"))
    .catch((error) => console.log(error));
};

export default ConnectDatabase;