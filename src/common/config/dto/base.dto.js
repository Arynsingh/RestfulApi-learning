import Joi from "joi"
class BaseDto{
  static schema = Joi.object({}) //we dont know who is gonna use this so we expect whoever use this will overide this
  //validate method
  static validate(data){
    const {error , value } = this.schema.validate(data,{//this give two vals err and values
        abortEarly: false, // all the error comes together
        stripUnknown : true // remove all the filed that is not needed
    })

    if(errpr){
        const error = error.details.map((d)=> d.message)
        return {error:error,value: null}
    }
    return {error:null,value}
  }
}

export  default BaseDto