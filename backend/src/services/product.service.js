import { productSchema } from "../models/products.model"
import slugify from "slugify";

export const getProductDetails = async(params)=>{
    const {
        search,
        category,
        maxPrice,
        minPrice,
        inStock,
        order = 'desc',
        sortBy,
        page = 1,
        limit = 10
    } = params
    const query = {}

    const allowedSortFields = ["price", "createdAt"];

    if (!allowedSortFields.includes(sortBy)) {
    sortBy = "createdAt";
    }

    if(category) query.category = category;
    if(search) query.name = { $regex: search , $options: 'i'}
    if(maxPrice || minPrice){
        query.price = {}
        if(maxPrice) query.price.$lte =  Number(maxprice)
        if(minPrice) query.price.$gte = Number(minPrice)
    }

    if (inStock === "true") {
        query.stock = { $gt: 0 };
    }

    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;

    const products = await productSchema.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(Number(limit));

    const total = await productSchema.countDocuments(query);

    return {
        total,
        products,
        page: Number(page),
        totalPages: Math.ceil(total / limit)
    }

}

export const getProductsBySlug = async(slug)=>{
    const product = await productSchema.findOne({    
            slug: slug,
        isActive: true
    })

    if(!product){
        throw new Error('Product not found')
    }

    return product
}

export const deleteProductDetail = async(id) =>{
    const product = await productSchema.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
  if(!product){
    throw new Error('Product not found')
  }

  return true
}

export const addProduct = async(productDetails) => {

  const {
    name,
    description,
    price,
    discountPrice,
    stock,
    category,
    images
  } = productDetails;

  const slug = slugify(name, {
    lower: true,
    strict: true
  });

  const existingProduct = await productSchema.findOne({ slug });

  if (existingProduct) {
    throw new Error("Product with same name already exists");
  }

  const product = await productSchema.create({
    name,
    slug,
    description,
    price,
    discountPrice,
    stock,
    category,
    images
  });

  return product;
}

export const modifyProduct = async(productId,productDetails) => {
 const product = await productSchema.findById(productId);

  if (!product) {
    throw new Error("Product not foundd");
  }

  if (productDetails.name && productDetails.name !== product.name) {
    product.slug = slugify(productDetails.name, {
      lower: true,
      strict: true
    });
  }

  Object.keys(productDetails).forEach(key => {
    product[key] = productDetails[key];
  });

  await productSchema.save();

  return product;
}


