import * as authService from "./auth.service.js"
import ApiResponse from "../../common/config/utils/api-response.js"


const register = async (req,res) =>{
   const user = await authService.register(req.body)
   ApiResponse.created(res ,"registration Success",user)


}





export {register}