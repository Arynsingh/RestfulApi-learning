import { required, string } from "joi"
import mongoose from "mongoose"
 const userSchema = new mongoose.Schema({
    name : {//instead of name : string ,by creating a object we can do this things 
        type : String, // why String not string
        trim : true,
        minlength : 2,
        maxlength : 50,
        required : [true,"Name is required" ]
    },//between objs
    email : { 
        type : String, // why String not string
        trim : true,
        unique : true,
        lowercase : true,
        required : [true,"Name is required" ]
    },
    password : {
        type : String,
        required:[true,"Password is required"],
        minlength:8,
        maxlength : 30
    },
    role : {
        type : String,
        enum : ["user","customer"],
        default : "customer"
    }

 })


 export default mongoose.model("User",userSchema)// in db it will be saved as users 