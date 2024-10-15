import e from "express";
import { registerUser, userLogin } from "../controllers/auth.js";

export const authRouter = e.Router()

authRouter.post('/Register',registerUser )
authRouter.post('/login', userLogin)