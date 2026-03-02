import { app } from "../app";
import { addProductController,modifyProductController,deleteProductController,getProductDetailsBySlugController,getProductDetailsController } from "../controllers/product.controller";

export const productRouter = app.Router()

productRouter.get("/",getProductDetailsController);
productRouter.get("/:slug",getProductDetailsBySlugController);
productRouter.post("/",addProductController);
productRouter.put("/:id",modifyProductController);
productRouter.delete("/:id",deleteProductController);





