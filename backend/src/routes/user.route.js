import { app } from "../app";
import { registerUser,loginUser } from "../controllers/auth.controller";

export const userRouter = app.Router()

userRouter.get("/me",registerUser);
userRouter.put("/me",loginUser);




