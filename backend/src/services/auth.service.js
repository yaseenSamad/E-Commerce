import { userSchema, addressSchema } from "../models/users.model";
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
    const user = await userSchema.findOne({ email: body.email});
    if(!user){
        throw new Error("Failed to login")
    }

    const isMatch = await bcrypt.compare(body.password, user.password)

     if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
        userId: user._id,   
        email: user.email,
        role: user.role
        },
        process.env.JWTSECRETKEY,
        { expiresIn: "1h" }
    );

  return token;

}