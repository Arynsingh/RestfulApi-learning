import Joi from "joi";
import BaseDto from "../../../common/config/dto/base.dto.js";


class RegisterDto extends BaseDto{
    static schema = Joi.object({
        name : Joi.string().trim().min(2).max(50),
        email : Joi.string().lowercase().required(),
        password : Joi.string().min(8).required()
        .message("Password must contain 8 chars minimum")
        .pattern(/*we can use regex*/)
    })
}