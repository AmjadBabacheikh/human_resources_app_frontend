import {
  OFFRES_LIST_REQUEST,
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
} from '../contants/offresContants';

export const listOffresReducer = (state = { offres: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRES_LIST_REQUEST:
      return { Loading: true };
    case OFFRES_LIST_SUCCESS:
      return { Loading: false, offres: payload };
    case OFFRES_LIST_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};
