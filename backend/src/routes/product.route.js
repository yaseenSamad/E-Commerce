import { app } from "../app";
import { registerUser,loginUser } from "../controllers/auth.controller";

export const productRouter = app.Router()

productRouter.get("/",registerUser);
productRouter.get("/:slug",loginUser);
productRouter.post("/",loginUser);
productRouter.put("/:id",loginUser);
productRouter.delete("/:id",loginUser);





