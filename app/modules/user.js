import Video from "../model/videoSchema.js"
import User from "../model/userSchema.js";
import { createError } from "../utils/index.js";

export const update =async (req,res,next)=>{
if(req.params.id===req.user.id){
    try{
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },
            {new:true}
        );
        res.status(200).json(updatedUser);

    }
    catch(err){
        next(createError(401,"something went wrong",res))
    }

}
else{
    return next(createError(403,"you can update only your account",res))
}
}

export const deleteUser = async (req, res, next) => {
    if(req.params.id===req.user.id){
        try{
          await User.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("Successfully deleted user");
    
        }
        catch(err){
            next(createError(401,"something went wrong",res))
        }
    
    }
    else{
        return next(createError(403,"you can delete only your account",res))
    }

}


export const getUser = async (req, res, next) => {
    try{
        const user=await User.findById(req.params.id);
        if(!user){
           return  res.send("please check id");
        }
        res.send(user);


    }catch(err){
        next(createError(401,"something went wrong",res))

    }
}

export const subscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(
            req.user.id,{
                $push:{subscribedUsers:req.params.id},
            });
            await User.findByIdAndUpdate(
                req.params.id,{
                    $inc:{subscribers:1}
                });
                res.status(200).json("Subscripption successfully");
    }catch(err){
        next(createError(401,"something went wrong",res))

    }
}

export const unsubscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1},
        })
        res.status(200).json("Unsubscription successful")

    }catch(err){
        next(createError(401,"something went wrong",res))

    }
}


export const like = async (req, res, next) => {
    try{
        const id=req.user.id; //logined id
        const videoId=req.parmas.videoId; //video id
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{likes:id},
            $pull:{dislikes:id}
          })
          res.status(200).json("The video has been liked.")


    }catch(err){
        next(createError(401,"something went wrong",res))

    }
}

export const dislike = async (req, res, next) => {
    try{
        const id = req.user.id;
        const videoId = req.params.videoId;
          await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:id},
            $pull:{likes:id}
          })
          res.status(200).json("The video has been disliked.")

    }catch(err){
        next(createError(401,"something went wrong",res))

    }
}
