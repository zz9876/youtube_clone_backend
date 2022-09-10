import express from "express";
import { getUser } from "../modules/user.js";
import {apiEndpoints} from "../common/constant.js"
const router=express.Router();

router.get(apiEndpoints.GET_USER,getUser);

export default router;