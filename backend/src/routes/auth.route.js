import { app } from "../app";
import { registerUser,loginUser } from "../controllers/auth.controller";

export const authRouter = app.Router()

authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);




