//instal token type - npm i jsonwebtoken token is just a long string 
//we can make token from crypto as well

import crypto from "crypto"

const generateResetToken = () =>{
  const rawToken =   crypto.randomBytes(32).toString("hex")
}

export {
    generateResetToken
}