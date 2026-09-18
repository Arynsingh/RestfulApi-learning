import User from "./auth.model.js"//User will be capital always
import ApiError from "../../common/config/utils/api-error.js"
import { generateAccessToken, generateRefreshToken, generateResetToken, verifyRefreshToken } from "../../common/config/utils/jwt.utils.js"


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

const login = async({email,password})=>{
    const user = User.findOne(email).select("+password")
    if (!user) throw ApiError.unauthorized("Invalid email or password")

        //will check password'
    if(!user.isVerified){
            throw ApiError.forbidden("Please verify")
        }
   const accessToken = generateAccessToken({id: user._id,role : user.role });//usually give less to have smaller token with id can get anything so...
   const refreshToken = generateRefreshToken({id : user._id})

   user.refreshtoken = hashtoken(refreshToken) // now hashed
   await user.save({validateBeforeSave:false})//turn flag to false

   const userObj = user.toObject()
   delete user.password;
   delete user.refreshtoken

   return {user : userObj,accessToken,refreshToken}

}


const refresh = async(token)=>{
    if(!token) throw ApiError.unauthorized("Refresh token missing")
    const decoded = verifyRefreshToken(token)
    const user = await User.findById(decoded.id).select("+refreshtoken"); //search where i added payload in this decoded
    if(!user) throw ApiError.unauthorized("User not Found")
    if(user.refreshtoken != hashToken(token) ){
            throw ApiError.unauthorized("Invalid refresh Token");
    }
    const accessToken = generateAccessToken({id: user._id, role:user._role});
    const refreshtoken = generateRefreshToken({id : user._id})
    user.refreshToken = hashToken(refreshtoken);
    await User.save({validateBeforeSave:false})

    const userObj = new Object();
    delete user.password;
    delete user.refreshtoken


    return {accessToken};

}
export {register}