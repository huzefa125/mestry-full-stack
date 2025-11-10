import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if (connection.isConnected) {
        console.log("Already connected to database");
        return
    }
    try {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL is not defined in environment variables');
        }
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db connected successfully");
  
    } catch (error) {
        console.log("Database collection failed");
        console.log(error);
        
    }
}

export default dbConnect;