import express from "express";
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../app/modules/user.js";
import {apiEndpoints} from "../app/common/constant.js"
import {signIn, signUp} from "../app/modules/auth.js"
import { verifyToken } from "../app/middleware/verfiyToken.js";
import { addVideo, addView, getByTag, getVideo, random, search, sub, trend } from "../app/modules/video.js";
import { addComment, deleteComment, getComments } from "../app/modules/comment.js"
const router=express.Router();

//auth-routes
router.post(apiEndpoints.SIGN_UP,signUp);
router.post(apiEndpoints.SIGN_IN,signIn);


//user-routes
router.put(apiEndpoints.UPDATE_USER, verifyToken, update);
router.delete(apiEndpoints.DELETE_USER, verifyToken, deleteUser);
router.get(apiEndpoints.GET_USER, getUser);
router.put(apiEndpoints.SUB_USER, verifyToken, subscribe);
router.put(apiEndpoints.UNSUB_USER, verifyToken, unsubscribe);
router.put(apiEndpoints.LIKE_VIDEO, verifyToken, like);
router.put(apiEndpoints.DISLIKE_VIDEO, verifyToken, dislike);

//video
router.post(apiEndpoints.ADD_VIDEO, verifyToken, addVideo)
router.put(apiEndpoints.ADD_VIDEO_ID, verifyToken, addVideo)
router.delete(apiEndpoints.ADD_VIDEO_ID, verifyToken, addVideo)
router.get(apiEndpoints.GET_VIDEO, getVideo)
router.put(apiEndpoints.ADD_VIEW_VIDEO, addView)
router.get(apiEndpoints.TREND_VIDEO, trend)
router.get(apiEndpoints.RANDOM_VIDEO, random)
router.get(apiEndpoints.SUB_VIDEO,verifyToken, sub)
router.get(apiEndpoints.GET_BY_TAG_VIDEO, getByTag)
router.get(apiEndpoints.SEARCH_VIDEO, search)


//comment
router.post(apiEndpoints.ADD_COMMENT, verifyToken, addComment)
router.delete(apiEndpoints.DELETE_COMMENT, verifyToken, deleteComment)
router.get(apiEndpoints.GET_COMMENT, getComments)


export default router;