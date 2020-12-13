import {
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
  OFFRES_LIST_REQUEST,
} from '../contants/offresContants';
import axios from 'axios';

export const getOffres = () => async (dispatch) => {
  try {
    dispatch({ type: OFFRES_LIST_REQUEST });
    const { data } = await axios.get('/api/offers');
    dispatch({ type: OFFRES_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: OFFRES_LIST_FAIL });
    console.error(err);
  }
};
