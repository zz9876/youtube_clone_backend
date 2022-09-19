import { createError } from "../utils/index.js";
import Comment from  "../model/commentSchema.js";
import Video from "../model/videoSchema.js";


export const addComment =async (req,res,next)=>{
    const newComment=new Comment({
        userId:req.user.id
    });
    try{
        const savedComment=await newComment.save();
        res.status(200).send(savedComment);

    }
    catch(err){
        next(createError(403,"something went wrong",res))
    }
}

export const deleteComment=async (req,res,next)=>{
    try{
        const comment =await Comment.findById(req.params.id);
        const video=await Video.findById(res.params.id);

        if(req.user.id === comment.userId || req.user.id=== video.userId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The Comment has been deleted");
        }
        else{
            return next(createError(403,"You can delete only your comment",res));
        }

    }catch(err){
        next(createError(403,"something went wrong"))
    }
}
export const getComments = async (req, res, next) => {
    try {
      const comments = await Comment.find({ videoId: req.params.videoId });
      res.status(200).json(comments);
    } catch (err) {
      next(err);
    }
};