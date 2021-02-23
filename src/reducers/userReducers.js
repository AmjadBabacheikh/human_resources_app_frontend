import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_INFO_RESET,
  USER_CHANGE_ROLE_REQUEST,
  USER_CHANGE_ROLE_SUCCESS,
  USER_CHANGE_ROLE_FAIL,
  USER_CHANGE_ROLE_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_REGISTER_RESET,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  GET_USER_IMAGE_REQUEST,
  GET_USER_IMAGE_SUCCESS,
  GET_USER_IMAGE_FAIL,
  GET_USER_IMAGE_RESET,
  GET_USER_CV_REQUEST,
  GET_USER_CV_SUCCESS,
  GET_USER_CV_FAIL,
  GET_LOG_REQUEST,
  GET_LOG_SUCCESS,
  GET_LOG_FAIL,
  GET_LOG_RESET,
} from '../contants/userConstants';

export const loginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return { Loading: true };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        Loading: false,
        userInfo: payload,
      };
    }
    case USER_LOGIN_FAIL: {
      return {
        Loading: false,
        error: payload,
      };
    }
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST: {
      return { Loading: true };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        Loading: false,
        userInfo: payload,
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        Loading: false,
        error: payload,
      };
    }
    case USER_REGISTER_RESET: {
      return {};
    }
    default:
      return state;
  }
};

export const usersListReducer = (state = { users: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LIST_REQUEST:
      return { Loading: true };
    case USER_LIST_SUCCESS:
      return { Loading: false, users: payload };
    case USER_LIST_FAIL:
      return { Loading: false, error: payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DELETE_REQUEST:
      return { Loading: true };
    case USER_DELETE_SUCCESS:
      return { Loading: false, successDelete: true };
    case USER_DELETE_FAIL:
      return { Loading: false, errorDelete: payload };
    default:
      return state;
  }
};

export const userInfosReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_INFO_REQUEST:
      return { Loading: true };
    case USER_INFO_SUCCESS:
      return { Loading: false, user: payload };
    case USER_INFO_FAIL:
      return { Loading: false, error: payload };
    case USER_INFO_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userChangeRoleReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_CHANGE_ROLE_REQUEST:
      return { Loading: true };
    case USER_CHANGE_ROLE_SUCCESS:
      return { Loading: false, successChange: true };
    case USER_CHANGE_ROLE_FAIL:
      return { Loading: false, errorChange: payload };
    case USER_CHANGE_ROLE_RESET:
      return {};
    default:
      return state;
  }
};

export const profileUpdateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { Loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { Loading: false, success: true };
    case USER_UPDATE_PROFILE_FAIL:
      return { Loading: false, error: payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_PROFILE_REQUEST:
      return { Loading: true };
    case USER_PROFILE_SUCCESS:
      return { Loading: false, user: payload };
    case USER_PROFILE_FAIL:
      return { Loading: false, error: payload };
    case USER_PROFILE_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userImageReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_IMAGE_REQUEST:
      return { Loading: true };
    case GET_USER_IMAGE_SUCCESS:
      return { Loading: false, image: payload };
    case GET_USER_IMAGE_FAIL:
      return { Loading: false, error: payload };
    case GET_USER_IMAGE_RESET:
      return { image: {} };
    default:
      return state;
  }
};

export const userCvReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_CV_REQUEST:
      return { Loading: true };
    case GET_USER_CV_SUCCESS:
      return { Loading: false, cv: payload };
    case GET_USER_CV_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const logsListReducer = (state = { logs: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOG_REQUEST:
      return { Loading: true };
    case GET_LOG_SUCCESS:
      return { Loading: false, logs: payload };
    case GET_LOG_FAIL:
      return { Loading: false, error: payload };
    case GET_LOG_RESET:
      return { logs: [] };
    default:
      return state;
  }
};
