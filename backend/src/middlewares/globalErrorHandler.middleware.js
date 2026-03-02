import { errorResponse } from "../utils/common";

export const globalErrorHandler = (
  err,
  req,
  res,
  next
) => {

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

errorResponse(req,res,message || 'Error',statusCode)

};