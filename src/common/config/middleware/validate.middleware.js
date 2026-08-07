import ApiErr from "../utils/api-error.js"


const validate = (Dtoclass)=>{
    return (req,res,next)=>{
        const{errors,value} = Dtoclass.validate(req.body)
        if(errors){
            throw ApiErr.badRequest(errors.join(";"))
        }
        req.body = value; //only the passed thing will go in the body
        next()
    }
}
export default validate