import mongoose from "mongoose";

const connectDB = async () =>{
   const conn =  await mongoose.connect(process.env.MONGODB_URI);
   console.log(`Mongo DB connected : ${conn.connection.host}`)

}
//db connection can fail 
//db is always in another continent so always use await

export default connectDB;


