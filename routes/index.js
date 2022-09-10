import express from "express";
import UserModule from "../app/modules/user/index.js";
import {apiEndpoints} from "../app/common/constant.js"
const router=express.Router();

router.get(apiEndpoints.GET_USER,new UserModule().getUser);

export default router;