import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/index.js";

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
app.use('/api',userRouter);

app.listen(8000,()=>{
    connect();
    console.log("connected");
})