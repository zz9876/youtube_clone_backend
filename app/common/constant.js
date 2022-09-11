export const apiSuccessMessage = {
  FETCH_SUCCESS: "Information fetched successfully",
  ADD_SUCCESS: "Information added successfully",
};
export const apiEndpoints = {
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  //user
  GET_USER: "/user",
  UPDATE_USER: "/user/:id",
  SUB_USER: "/user/sub/:id",
  GET_USER: "/user/find/:id",
  DELETE_USER: "/user/:id",
  UNSUB_USER: "/user/unsub/:id",
  LIKE_VIDEO: "/user/like/:videoId",
  DISLIKE_VIDEO: "/user/dislike/:videoId",
  // video
  ADD_VIDEO: "/",
  ADD_VIDEO_ID: "/:id",
  GET_VIDEO: "/video/find/:id",
  ADD_VIEW_VIDEO: "/video/view/:id",
  TREND_VIDEO: "/video/trend",
  RANDOM_VIDEO: "/video/random",
  SUB_VIDEO: "/video/sub",
  GET_BY_TAG_VIDEO: "/video/tags",
  SEARCH_VIDEO: "/video/search",
};
export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
  },
  HEADER_TYPE: {
    URL_ENCODED: "application/x-www-form-urlencoded",
    APPLICATION_JSON: "application/json",
  },
  HEADER_KEYS: {
    DEVICE_TYPE: "device-type",
    DEVICE_ID: "device-id",
    SESSION_TOKEN: "session-token",
    PUSH_TOKEN: "push-token",
  },
  DEVICE_TYPE: {
    ANDROID: "android",
    IOS: "ios",
    WEB: "web",
  },
  CONTENT_TYPE: {
    URL_ENCODE: "application/x-www-form-urlencoded",
  },

  RESPONSE_STATUS: {
    SUCCESS: true,
    FAILURE: false,
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK: 200,
    NO_CONTENT_FOUND: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    GONE: 410,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUEST: 429,
  },
};
export const apiFailureMessage = {
  INVALID_PARAMS: "Invalid Parameters",
  INVALID_REQUEST: "Invalid Request",
  INVALID_SESSION_TOKEN: "Invalid session token",
  INTERNAL_SERVER_ERROR: "Internal server Error",
  BAD_REQUEST: "Bad Request!",
  DEVICE_ID_OR_SESSION_TOKEN_EMPTY:
    "Device id or session token can't be empty or null",
  SESSION_GENERATION: "Unable to generate session!",
  SESSION_EXPIRED: "Session Expired!",
  STORE_NAME_ALREADY_EXISTS:
    "storeName already exists. Please enter new storeName",
  SUBDOMAIN_ALREADY_EXIST: "subdomain already exist",
  UNABLE_TO_ADD_COLLECTION: "Unable to add collection",
};
