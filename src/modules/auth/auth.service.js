import User from "./auth.model.js"//User will be capital always
import ApiError from "../../common/config/utils/api-error.js"
import { generateResetToken } from "../../common/config/utils/jwt.utils.js"



const register = async({name,email,password,role}) =>{
    const existing = await User.findOne({email})
    if(existing) throw ApiError.conflict("Email Already Exists")//we made an new err in utils for conflict

    const {rawToken , hashedToken}= generateResetToken()

    const user = await User.create({
        name,
        email,
        role,
        password,
        verificationToken : hashedToken
    })
    //Todo :   send an email to user with Token : RawToken

    const userObj = user.toObject();
    delete userObj.password
    delete userObj.verificationToken//to delete

    return userObj;
}
export {register}