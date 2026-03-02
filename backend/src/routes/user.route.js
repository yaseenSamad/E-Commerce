import { app } from "../app";
import { userProfileDetails,modifyUserDetails } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/auth.middleware";

export const userRouter = app.Router()

userRouter.get("/me",authenticateToken,userProfileDetails);
userRouter.put("/me",authenticateToken,modifyUserDetails);




