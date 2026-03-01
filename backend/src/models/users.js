import mongoose from "mongoose";

export const userSchema  = new mongoose.Schema({
name: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true,
    unique: true,
    index: true
    },
    password:{
    type: String,
    required: true,
  },
    role:{
    type: String,
    enum: ['user', 'admin'], 
    required: true,
  },
  address : addressSchema

}, { timestamps: true })

export const addressSchema = new Schema({
  street: String,
  city: String,
  zipCode: String
});

// name (String)
// email (String, unique, indexed)
// password (String, hashed)
// role (String, enum: 'user' | 'admin')
// address (Embedded object)
// createdAt (Date)