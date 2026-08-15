import User from "./auth.model.js"//User will be capital always
import ApiError from "../../common/config/utils/api-error.js"



const register = async({name,email,password,role}) =>{
    const existing = await User.findOne({email})
    if(existing) throw ApiError.conflict("Email Already Exists")//we made an new err in utils for conflict



    return userObj;
}
export {register}