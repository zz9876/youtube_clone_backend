import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { apiFailureMessage, apiSuccessMessage, httpConstants } from "../common/constant.js";
import User from "../model/userSchema.js";
import {createError} from "../utils/index.js"
import jwt from "jsonwebtoken";

export const signUp=async (req,res)=>{
    if(!req.body.email ||!req.body.password){
        res.send({
            message:apiFailureMessage.INVALID_PARAMS,
            code:httpConstants.RESPONSE_CODES.FORBIDDEN
        })
    }
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=await new User({...req.body,password:hash}).save();

        res.status(200).send(newUser);
    }catch(err){
       return createError(500,"something went wrong",res);
    }

}
export const signIn=async (req,res)=>{
    if(!req.body.email ||!req.body.password){
        res.send({
            message:apiFailureMessage.INVALID_PARAMS,
            code:httpConstants.RESPONSE_CODES.FORBIDDEN
        })
    }
    try{

        const user =await User.findOne({email:req.body.email});
        let {password ,...other}=user._doc;

        const isCorrect=await bcrypt.compare(req.body.password,user.password);

        if(!user) {
            return createError(400,"error msg",res)
        } 
        if(!isCorrect){
            return createError(400,"wrong cred",res)
        }
        const token=jwt.sign({id:user._id},process.env.JWT);
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other);
    }catch(err){
       throw err;
    }

}


