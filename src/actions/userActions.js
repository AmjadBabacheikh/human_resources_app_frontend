import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_CHANGE_ROLE_REQUEST,
  USER_CHANGE_ROLE_SUCCESS,
  USER_CHANGE_ROLE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_REGISTER_RESET,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  GET_USER_IMAGE_REQUEST,
  GET_USER_IMAGE_SUCCESS,
  GET_USER_IMAGE_FAIL,
  GET_USER_CV_REQUEST,
  GET_USER_CV_SUCCESS,
  GET_USER_CV_FAIL,
  GET_LOG_REQUEST,
  GET_LOG_SUCCESS,
  GET_LOG_FAIL,
} from '../contants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/connexion',
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (
  CIN,
  email,
  password,
  firstName,
  lastName,
  adress,
  phoneNumber
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/register',
      {
        cin: CIN,
        email,
        password,
        firstName,
        lastName,
        adress,
        phoneNumber,
      },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get(`/api/ADMIN/users`, config);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    await axios.delete(`/api/ADMIN/users/${id}`, config);
    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get(`/api/ADMIN/users/${id}`, config);
    dispatch({ type: USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_REGISTER_RESET });
  dispatch({ type: USER_PROFILE_RESET });
};

export const changeRoleUser = (id, role) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CHANGE_ROLE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    await axios.put(`/api/ADMIN/users/${id}/role`, { role }, config);
    dispatch({ type: USER_CHANGE_ROLE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_CHANGE_ROLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (
  firstName,
  lastName,
  adress,
  phoneNumber,
  password
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.put(
      `/api/CANDIDAT/`,
      { firstName, lastName, adress, phoneNumber, password },
      config
    );
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get(`/api/CANDIDAT/`, config);
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyImage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_IMAGE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `${userInfo.jwt}`,
      },
      responseType: 'arraybuffer',
    };
    const response = await axios.get(`/api/CANDIDAT/pdp`, config);
    let blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    let image = URL.createObjectURL(blob);
    dispatch({ type: GET_USER_IMAGE_SUCCESS, payload: image });
  } catch (error) {
    dispatch({
      type: GET_USER_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyCV = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_CV_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `${userInfo.jwt}`,
      },
      responseType: 'arraybuffer',
    };
    const response = await axios.get(`/api/CANDIDAT/cv`, config);
    let blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    let cv = URL.createObjectURL(blob);
    dispatch({ type: GET_USER_CV_SUCCESS, payload: cv });
  } catch (error) {
    dispatch({
      type: GET_USER_CV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_LOG_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get(`/api/ADMIN/Log`, config);
    dispatch({ type: GET_LOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_LOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
