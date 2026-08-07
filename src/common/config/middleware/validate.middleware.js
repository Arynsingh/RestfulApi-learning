import ApiErr from "../utils/api-error.js"


const validate = (Dtoclass)=>{
    return (req,res,next)=>{
        const{errors,value} = Dtoclass.validate(req.body)
        if(errors){
            throw ApiErr.badRequest(errors)
        }
        req.body = value;
        next()
    }
}
export default validate