import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/index.js";
import cookieParser from "cookie-parser"
const port=process.env.PORT || 8000;
const app=express();
dotenv.config();

const connect=()=>{
    mongoose.connect(
        process.env.MONGO
    ).then(()=>{
        console.log("connected with db")
    }).catch(err=>{
        throw err;
    })
}
app.use(cookieParser())
app.use(express.json())

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "message went wrong"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})
app.use('/api',userRouter);
app.get('/',(req,res)=>{
    res.send('hello ji')
})
app.listen(port,()=>{
    connect();
    console.log("connected");
})