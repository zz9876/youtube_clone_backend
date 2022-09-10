import { apiFailureMessage, httpConstants } from '../common/constant.js'
export default class Utils {
    static response(res, data, message, success, code) {
      const responseObj = {
        responseData: data,
        message: message,
        success: success,
        responseCode: code
      }
      res.format({
        json: () => {
          res.send(responseObj)
        }
      })
    }
    static handleError(err, req, res) {
      if (!res) { return false }
      err = err || {}
      const msg = err.message ? err.message : apiFailureMessage.INTERNAL_SERVER_ERROR
      const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR
      this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code)
    }

    static responseForValidation(res, errorArray, success, code = 400) {
        const responseObj = {
          message: 'Invalid Request',
          errors: errorArray,
          success: success,
          responseCode: code
        }
        res.format({
          json: () => {
            res.send(responseObj)
          }
        })
      }
      static async parseResponse(promise) {
        return promise.then(data => {
          return [null, data]
        }).catch(err => [err])
      }
    
}