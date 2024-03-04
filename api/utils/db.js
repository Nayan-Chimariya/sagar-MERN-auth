import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL= process.env.MONGODB_URL;

const connectDb = async()=>{
    await mongoose.connect(URL);
    console.log("Data base connection successfully")


    try {
        
    } catch (error) {
        console.log("Data base connection failed")
        process.exit(0)
    }
}


export default connectDb;