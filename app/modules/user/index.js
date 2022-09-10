import BLManager from "./manger.js"
import Utils from "../../utils/index.js"
import { apiSuccessMessage, httpConstants } from "../../common/constant.js"
export default class INDEX{

    async getUser(request,response){
        const [err,result]=await Utils.parseResponse(
            new BLManager().getUser()
        )
        if(err) return Utils.handleError(err,request,response)
        return Utils.response(
            response,
            result,
            apiSuccessMessage.FETCH_SUCCESS,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK,
        )
    }
}