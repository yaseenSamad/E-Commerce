import { successResponse,errorResponse } from "../utils/common";
import { addProduct,modifyProduct,deleteProductDetail,getProductDetails,getProductsBySlug } from "../services/product.service";

export const addProductController = async(req,res) =>{
    try{
        const body = req.body
        const createdProduct = await addProduct(body)
        successResponse(req,res,createdProduct,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to add product',500)
    }
}

export const modifyProductController = async(req,res) =>{
    try{
        const body = req.body
        const id = req.params.id
        const updatedProduct = await modifyProduct(id,body)
        successResponse(req,res,updatedProduct,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to update product',500)
    }
}

export const getProductDetailsController = async(req,res) =>{
    try{
        const queryParams = req.query
        const productDetails = await getProductDetails(queryParams)
        successResponse(req,res,productDetails,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to fetch products',500)
    }
}

export const getProductDetailsBySlugController = async(req,res) =>{
    try{
         const slug = req.params.slug
        const getProduct = await getProductsBySlug(slug)
        successResponse(req,res,getProduct,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to fetch product',500)
    }
}

export const deleteProductController = async(req,res) =>{
    try{
        const id = req.params.id
        const productDeleted = await deleteProductDetail(id)
        successResponse(req,res,productDeleted,200)
    }catch(e){
        console.log(e)
        errorResponse(req,res,'Failed to delete product',500)
    }
}