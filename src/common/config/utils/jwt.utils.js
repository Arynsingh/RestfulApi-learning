//instal token type - npm i jsonwebtoken token is just a long string 
//we can make token from crypto as well

import crypto from "crypto"

const generateResetToken = () =>{
  const rawToken =   crypto.randomBytes(32).toString("hex")
  const hashedToken = crypto
  .createHash("sha256")//sha256 is a hasing algo
  .update(rawToken)
  .digest("hex")

  return {rawToken,hashedToken}
  
}

export {
    generateResetToken
}