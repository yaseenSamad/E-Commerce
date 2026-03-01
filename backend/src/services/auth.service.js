import { userSchema,addressSchema, addressSchema } from "../models/users";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUserToModel = async(body) => {
    let hashedpassword = ''
    bcrypt.hash(body.password, 10 , function(err, hash) {// round -> env 
        if(err){
            throw new Error('Password hashing failed')
        }
        hashedpassword = hash
    });

    let addressSchema = new addressSchema(body.address)

    let user = new userSchema({
        name: body.name,
        address: addressSchema,
        password: hashedpassword,
        email: body.email
    });

    try{
    const newUser = await user.save()
    return newUser
    }catch(e){
        console.log(e)
        throw new Error("Failed to save user")
    }
}

export const loginUserModel = async() => {
    const user = await userSchema.find({ email: body.email});
    if(!user){
        throw new Error("Failed to login")
    }

    bcrypt.compare(body.password, user.password, function(err, result) {
        if(err || !result){
            throw new Error("Failed to login")
        }

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: user.email
        }, process.env.JWTSECRETKEY);

        return token
    });

    return null

}