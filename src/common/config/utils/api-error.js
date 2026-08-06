class ApiErr extends Error{
    constructor(statuscode,message){
        super(message)
        this.statuscode = statuscode
        this.isOperationa =  true //it just flag we see in future
        Error.captureStackTrace(this,this.constructor)
    }

    static badRequest(message="Bad Request"){
        return new ApiErr(400,message)
    }
     static unauthorized(message="Unauthorized"){
        return new ApiErr(401,message)
    }
}

//throw new ApiErr.badRequest to use
export default ApiErr