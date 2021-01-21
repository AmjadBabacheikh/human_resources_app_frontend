import {
  OFFRES_LIST_REQUEST,
  OFFRES_LIST_FAIL,
  OFFRES_LIST_SUCCESS,
  OFFRE_DELETE_REQUEST,
  OFFRE_DELETE_SUCCESS,
  OFFRE_DELETE_FAIL,
  OFFRES_LIST_ADMIN_REQUEST,
  OFFRES_LIST_ADMIN_SUCCESS,
  OFFRES_LIST_ADMIN_FAIL,
  OFFRE_VALIDATE_REQUEST,
  OFFRE_VALIDATE_SUCCESS,
  OFFRE_VALIDATE_FAIL,
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

export const offreDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRE_DELETE_REQUEST:
      return { Loading: true };
    case OFFRE_DELETE_SUCCESS:
      return { Loading: false, successDelete: true };
    case OFFRE_DELETE_FAIL:
      return { Loading: false, errorDelete: payload };
    default:
      return state;
  }
};

export const listOffresAdminReducer = (state = { offres: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRES_LIST_ADMIN_REQUEST:
      return { Loading: true };
    case OFFRES_LIST_ADMIN_SUCCESS:
      return { Loading: false, offres: payload };
    case OFFRES_LIST_ADMIN_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const offreValidateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRE_VALIDATE_REQUEST:
      return { Loading: true };
    case OFFRE_VALIDATE_SUCCESS:
      return { Loading: false, successValidate: true };
    case OFFRE_VALIDATE_FAIL:
      return { Loading: false, errorValidate: payload };
    default:
      return state;
  }
};
