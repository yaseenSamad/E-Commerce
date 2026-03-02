import { successResponse,errorResponse } from "../utils/common"


export const userProfileDetails = async(req,res) =>{
    try{
        const user = req.user
        const userDetails = await getUserProfileDetails(user.id)
        successResponse(req,res,userDetails,200)
    }
    catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to get user profile details',500)
    }
}

export const modifyUserDetails = async(req,res)=>{
    try{
        const body = req.body
        const user = req.user
        const updatedUser = await modifyUserDetails(user.id, body)
        successResponse(req,res,updatedUser,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to update user details',500)
    }   
}