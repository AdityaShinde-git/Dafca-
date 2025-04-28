import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// to hash the db's name and password for security using  dotenv
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@dafca-application-shard-00-00.twwi0.mongodb.net:27017,dafca-application-shard-00-01.twwi0.mongodb.net:27017,dafca-application-shard-00-02.twwi0.mongodb.net:27017/?ssl=true&replicaSet=atlas-odyoku-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Dafca-application`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Connection Unsuccessfull",error.message)
    }
}
export default Connection;