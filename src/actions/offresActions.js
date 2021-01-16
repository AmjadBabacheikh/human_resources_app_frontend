import axios from 'axios';
import {
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
  OFFRES_LIST_REQUEST,
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
