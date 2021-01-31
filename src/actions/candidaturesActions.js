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
