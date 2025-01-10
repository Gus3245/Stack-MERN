import mongoose from 'mongoose';



async function ConnectDatabase(uri) {
    console.log("Await Connect to the Database");

    await mongoose.connect(uri)
    .then(() => console.log("MongoDb Atlas Connected"))
    .catch((error) => console.log(error));
};

export default ConnectDatabase;