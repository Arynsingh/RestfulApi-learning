//instal token type - npm i jsonwebtoken token is just a long string 
//we can make token from crypto as well
import jwt from "jsonwebtoken"
import crypto from "crypto"


const generateAccessToken = (payload) =>{
  jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m'
  })
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
    generateResetToken
}