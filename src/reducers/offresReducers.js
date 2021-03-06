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
  OFFRES_LIST_RECRUTEUR_REQUEST,
  OFFRES_LIST_RECRUTEUR_SUCCESS,
  OFFRES_LIST_RECRUTEUR_FAIL,
  OFFRE_CREATE_REQUEST,
  OFFRE_CREATE_SUCCESS,
  OFFRE_CREATE_FAIL,
  OFFRE_CREATE_RESET,
  OFFRE_DETAIL_REQUEST,
  OFFRE_DETAIL_SUCCESS,
  OFFRE_DETAIL_FAIL,
  LATEST_OFFERS_REQUEST,
  LATEST_OFFERS_SUCCESS,
  LATEST_OFFERS_FAIL,
  CLOTURER_OFFRE_REQUEST,
  CLOTURER_OFFRE_SUCCESS,
  CLOTURER_OFFRE_FAIL,
  CLOTURER_OFFRE_REST,
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

export const listOffresRecruteurReducer = (state = { offres: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRES_LIST_RECRUTEUR_REQUEST:
      return { Loading: true };
    case OFFRES_LIST_RECRUTEUR_SUCCESS:
      return { Loading: false, offres: payload };
    case OFFRES_LIST_RECRUTEUR_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const offreCreateReducer = (state = { offre: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRE_CREATE_REQUEST:
      return { Loading: true };
    case OFFRE_CREATE_SUCCESS:
      return { Loading: false, offre: payload, success: true };
    case OFFRE_CREATE_FAIL:
      return { Loading: false, error: payload };
    case OFFRE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const detailOffreReducer = (state = { offre: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case OFFRE_DETAIL_REQUEST:
      return { Loading: true };
    case OFFRE_DETAIL_SUCCESS:
      return { Loading: false, offre: payload };
    case OFFRE_DETAIL_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const latestOffresListReducer = (state = { offres: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LATEST_OFFERS_REQUEST:
      return { Loading: true };
    case LATEST_OFFERS_SUCCESS:
      return { Loading: false, offres: payload };
    case LATEST_OFFERS_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const offreCloturerReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOTURER_OFFRE_REQUEST:
      return { Loading: true };
    case CLOTURER_OFFRE_SUCCESS:
      return { Loading: false, successCloturer: true };
    case CLOTURER_OFFRE_FAIL:
      return { Loading: false, errorCloturer: payload };
    case CLOTURER_OFFRE_REST:
      return {};
    default:
      return state;
  }
};
