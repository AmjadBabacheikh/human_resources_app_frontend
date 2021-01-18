import axios from 'axios';
import {
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
  OFFRES_LIST_REQUEST,
  OFFRE_DELETE_REQUEST,
  OFFRE_DELETE_SUCCESS,
  OFFRE_DELETE_FAIL,
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
    await axios.delete(`/api/offers/${id}`, config);
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
