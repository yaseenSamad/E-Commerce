import { successResponse,errorResponse } from "../utils/common"


export const registerUser = async(req,res) =>{
    try{
        const body = req.body
        const {password,...newUser} = await registerUserToModel(body)
        successResponse(req,res,newUser,200)
        return;
    }
    catch(e){
        console.log(e)
        errorResponse(req,res,'Register Failed',500)
        return;
    }
}

export const loginUser = async(req,res)=>{
    try{
        const body = req.body
        const token = await loginUserModel(body)
        if(!token){
            throw new Error("Failed to login")
        }
        successResponse(req,res,'data',200)
        return;
    }
    catch(e){
        console.log(e)
        errorResponse(req,res,'Something went wrong',200)
        return;
    }
}