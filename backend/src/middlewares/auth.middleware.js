import jwt from 'jsonwebtoken'
import { errorResponse } from "../utils/common"

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    errorResponse(req,res,'Unauthorized. No token provide',401)
  }
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error)
    errorResponse(req,res,'Forbidden - Invalid or expired token',403)
  }
};