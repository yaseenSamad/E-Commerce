import mongoose from "mongoose";

export const productSchema  = new mongoose.Schema({
name: {
    type: String,
    required: true,
  },
    slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true
    },
    description:{
    type: String,
    required: true,
  },
    price:{
    type: Number,
    required: true,
  },
  discountPrice :{
    type: Number,
    required: false,
  },
stock :{
    type: Number,
    required: true,
  },
category:{
    type: String,
    required: true,
  },
images :{
    type: [String],
    required: true,
  },
isActive :{
    type: Boolean,
    required: true,
  },

}, { timestamps: true })


// name (String)
// slug (String, unique)
// description (String)
// price (Number)
// discountPrice (Number, optional)
// stock (Number)
// category (String)
// images (Array of Strings)
// isActive (Boolean)
// createdAt , updatedAt (Date)