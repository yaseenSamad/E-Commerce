import { errorResponse } from "../utils/common";

export const isAdmin = (req, res, next) => {

  if (req.user.role !== "admin") {
    errorResponse(req,res,'Access denied',403)
    return
  }

  next();
};