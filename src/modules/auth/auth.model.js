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
        maxlength : 30,
        select : false
    },
    role : {
        type : String,
        enum : ["user","customer"],//for enum is default is compulsary  
        default : "customer "
    },
    verifactionToken : {type : String , select : false},//select false will not return
    refreshToken : {type : String , select : false},
    resetPasswordtoken : {type: String,select:false},
    resetpaswordExpires : {type : Date, select : false}
 },{timestamps : true /*always go as second argument by making it true it gets created at and updated at */})


 export default mongoose.model("User",userSchema)// in db it will be saved as users 