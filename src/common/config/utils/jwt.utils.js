//instal token type - npm i jsonwebtoken token is just a long string 
//we can make token from crypto as well
import jwt from "jsonwebtoken"
import crypto from "crypto"



const hashToken = (token)=>  crypto.createHash("sha256").update(rawToken).digest("hex") //sha256 is a hasing algo


const generateAccessToken = (payload) =>{
  return jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m'
  })
}

const verifyAccessToken = (token)=>{
  return jwt.verify(token,procces.env.JWT_ACCESS_SECRET) // returns true or false
}

const generateRefreshToken = (payload) =>{
  return jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  })
}

const verifyRefreshToken = (token)=>{
  return jwt.verify(token,procces.env.JWT_REFRESH_SECRET) // returns true or false
}



const generateResetToken = () =>{
  const rawToken =   crypto.randomBytes(32).toString("hex")
  const hashedToken = crypto
  .createHash("sha256")//sha256 is a hasing algo
  .update(rawToken)
  .digest("hex")

  return {rawToken,hashedTokena}
  
}

export {
    generateResetToken,
    verifyAccessToken,
    verifyRefreshToken,
    generateAccessToken,
    generateRefreshToken
}