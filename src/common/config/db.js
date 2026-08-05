import mongoose from "mongoose";

const connectDV = async () =>{
   const conn =  await mongoose.connect(process.env.MONGODB_URI);

}