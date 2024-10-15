import { StatusCodes } from "http-status-codes";


import User from "../models/userSchema.js";
import { successResponse, errorResponse } from "../utils/responses.js";
import { hashPassword, verifyPassword} from "../utils/Auth.js";

export const registerUser = async(req, res, next) =>{
    const {username, password} = req.body

    try{
        const user = await User.findOne({username: username})
        if(user){
            return errorResponse(res, StatusCodes.BAD_REQUEST, `Username already exists!`)
        }

        const hashed = await hashPassword(password)

        const newUser = await User.create({
            username, 
            password: hashed
        })

        await newUser.save()
        return successResponse(res, StatusCodes.CREATED, `New User has been created`, newUser)
    }

    catch(error){
        next(error)
    }
}

export const userLogin = async(req, res, next) =>{
    const{username, password} = req.body

    try{
        const user = await User.findOne({username})

        if(!user){
            return errorResponse(res, StatusCodes.NOT_FOUND, `User does not exist, Register!`)
        }
        const verify= await verifyPassword(password, user.password)

        if(!verify){
            return errorResponse(res, StatusCodes.BAD_REQUEST, `Password is Wrong!`)
        }

        req.session.username = user.username
        console.log(req.session.username)
        return successResponse(res, StatusCodes.CREATED, `Logged in successfully`, user
            )
    }

    catch(error){
        next(error)
    }
}

