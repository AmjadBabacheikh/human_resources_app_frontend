import axios from 'axios';
import {
  POSTULER_OFFRE_REQUEST,
  POSTULER_OFFRE_SUCCESS,
  POSTULER_OFFRE_FAIL,
  GET_CANDIDATURES_REQUEST,
  GET_CANDIDATURES_SUCCESS,
  GET_CANDIDATURES_FAIL,
  ANNULER_CANDIDATURE_REQUEST,
  ANNULER_CANDIDATURE_SUCCESS,
  ANNULER_CANDIDATURE_FAIL,
  GET_CANDIDATURES_OFFER_REQUEST,
  GET_CANDIDATURES_OFFER_SUCCESS,
  GET_CANDIDATURES_OFFER_FAIL,
  GET_CANDIDATURE_DETAIL_REQUEST,
  GET_CANDIDATURE_DETAIL_SUCCESS,
  GET_CANDIDATURE_DETAIL_FAIL,
  GET_CANDIDATURE_OWNER_CV_REQUEST,
  GET_CANDIDATURE_OWNER_CV_SUCCESS,
  GET_CANDIDATURE_OWNER_CV_FAIL,
  GET_CANDIDATURE_OWNER_PDP_REQUEST,
  GET_CANDIDATURE_OWNER_PDP_SUCCESS,
  GET_CANDIDATURE_OWNER_PDP_FAIL,
  CHANGE_STATUS_CANDIDATURE_REQUEST,
  CHANGE_STATUS_CANDIDATURE_SUCCESS,
  CHANGE_STATUS_CANDIDATURE_FAIL,
} from '../contants/candidaturesConstants';

export const postuler = (id, candidature) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POSTULER_OFFRE_REQUEST,
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
    await axios.post(`/api/CANDIDAT/offers/${id}`, candidature, config);
    dispatch({ type: POSTULER_OFFRE_SUCCESS });
  } catch (error) {
    dispatch({
      type: POSTULER_OFFRE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyCandidatures = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CANDIDATURES_REQUEST,
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
    const { data } = await axios.get('/api/CANDIDAT/candidatures', config);
    dispatch({ type: GET_CANDIDATURES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATURES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const annulerCandidature = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANNULER_CANDIDATURE_REQUEST,
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
    await axios.delete(`/api/CANDIDAT/candidatures/${id}`, config);
    dispatch({ type: ANNULER_CANDIDATURE_SUCCESS });
  } catch (error) {
    dispatch({
      type: ANNULER_CANDIDATURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCandidaturesOffer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CANDIDATURES_OFFER_REQUEST,
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
    const { data } = await axios.get(
      `/api/RECRUTEUR/offers/${id}/candidatures`,
      config
    );
    dispatch({ type: GET_CANDIDATURES_OFFER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATURES_OFFER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCandidatureDetail = (idOffre, idCandidature) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: GET_CANDIDATURE_DETAIL_REQUEST,
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
    const { data } = await axios.get(
      `/api/RECRUTEUR/offers/${idOffre}/candidatures/${idCandidature}`,
      config
    );
    dispatch({ type: GET_CANDIDATURE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATURE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCandidatureOwnerCV = (idOffre, idCandidature) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: GET_CANDIDATURE_OWNER_CV_REQUEST,
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
    const response = await axios.get(
      `/api/RECRUTEUR/offers/${idOffre}/candidatures/${idCandidature}/owner/cv`,
      config
    );
    let blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    let cv = URL.createObjectURL(blob);
    dispatch({ type: GET_CANDIDATURE_OWNER_CV_SUCCESS, payload: cv });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATURE_OWNER_CV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCandidatureOwnerPDP = (idOffre, idCandidature) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: GET_CANDIDATURE_OWNER_PDP_REQUEST,
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
    const response = await axios.get(
      `/api/RECRUTEUR/offers/${idOffre}/candidatures/${idCandidature}/owner/pdp`,
      config
    );
    let blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    let image = URL.createObjectURL(blob);
    dispatch({ type: GET_CANDIDATURE_OWNER_PDP_SUCCESS, payload: image });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATURE_OWNER_PDP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const changerCandidatureStatus = (
  idOffre,
  idCandidature,
  status
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHANGE_STATUS_CANDIDATURE_REQUEST,
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
    await axios.put(
      `/api/RECRUTEUR/offers/${idOffre}/candidatures/${idCandidature}/status`,
      { status },
      config
    );
    dispatch({ type: CHANGE_STATUS_CANDIDATURE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CHANGE_STATUS_CANDIDATURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
