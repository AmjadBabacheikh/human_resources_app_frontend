import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
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
    default:
      return state;
  }
};
