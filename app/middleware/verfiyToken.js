import jwt from "jsonwebtoken";
import { createError } from "../utils/index.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token) return createError(401,"you are not authenticated",res);
    jwt.verify(token,process.env.jwt,(err,user)=>{
        if(err) return next(createError(403,"token is not valid",res));
        req.user=user;
        next();
})
}