import mongoose from "mongoose";

export const connectDB =async (URI)=>{
    try{
       const connectionInstance = await mongoose.connect(URI);
       console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`)
       return connectionInstance;
    }catch(err){
        console.log("MONGODB CONNECTION ERROR: ", err)
        process.exit(1);
    }
};