import { Router } from "express";
import * as controller from "./auth.controller"
import RegisterDto from "./dto/register.dto";
const router = Router()


router.post("/register",validate(RegisterDto),controller.register)
router.post("/addblog",)

export default router