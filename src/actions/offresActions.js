import axios from 'axios';
import {
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
  OFFRES_LIST_REQUEST,
  OFFRE_DELETE_REQUEST,
  OFFRE_DELETE_SUCCESS,
  OFFRE_DELETE_FAIL,
  OFFRES_LIST_ADMIN_REQUEST,
  OFFRES_LIST_ADMIN_SUCCESS,
  OFFRES_LIST_ADMIN_FAIL,
  OFFRE_VALIDATE_REQUEST,
  OFFRE_VALIDATE_SUCCESS,
  OFFRE_VALIDATE_FAIL,
  OFFRES_LIST_RECRUTEUR_REQUEST,
  OFFRES_LIST_RECRUTEUR_SUCCESS,
  OFFRES_LIST_RECRUTEUR_FAIL,
  OFFRE_CREATE_REQUEST,
  OFFRE_CREATE_SUCCESS,
  OFFRE_CREATE_FAIL,
  OFFRE_DETAIL_REQUEST,
  OFFRE_DETAIL_SUCCESS,
  OFFRE_DETAIL_FAIL,
} from '../contants/offresContants';

export const getOffres = () => async (dispatch) => {
  try {
    dispatch({ type: OFFRES_LIST_REQUEST });
    const { data } = await axios.get('/api/offers');
    dispatch({ type: OFFRES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OFFRES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOffresAdmin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: OFFRES_LIST_ADMIN_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get('/api/ADMIN/offers', config);
    dispatch({ type: OFFRES_LIST_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OFFRES_LIST_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteOffer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OFFRE_DELETE_REQUEST,
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
    await axios.delete(`/api/ADMIN/offers/${id}`, config);
    dispatch({ type: OFFRE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: OFFRE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const validerOffer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OFFRE_VALIDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.put(`/api/ADMIN/offers/${id}/status`, config);
    dispatch({ type: OFFRE_VALIDATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: OFFRE_VALIDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOffresRecruteur = () => async (dispatch, getState) => {
  try {
    dispatch({ type: OFFRES_LIST_RECRUTEUR_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.get('/api/RECRUTEUR/offers', config);
    dispatch({ type: OFFRES_LIST_RECRUTEUR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OFFRES_LIST_RECRUTEUR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createOffre = (offre) => async (dispatch, getState) => {
  try {
    dispatch({ type: OFFRE_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userInfo.jwt}`,
      },
    };
    const { data } = await axios.post('/api/RECRUTEUR/offers', offre, config);
    dispatch({ type: OFFRE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OFFRE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getOffreDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: OFFRE_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/offers/${id}`);
    dispatch({ type: OFFRE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OFFRE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
