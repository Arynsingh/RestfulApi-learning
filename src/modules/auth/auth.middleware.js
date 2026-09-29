import ApiError from "../../common/config/utils/api-error";
import User from "./auth.model.js"

const authenticate = async(req,res,next) =>{
    let Token;
    if(req.headers.authenticate?.startsWith("Bearer")){
        
    }

}
export {authenticate};


