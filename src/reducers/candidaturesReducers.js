import {
  POSTULER_OFFRE_REQUEST,
  POSTULER_OFFRE_SUCCESS,
  POSTULER_OFFRE_FAIL,
  POSTULER_OFFRE_RESET,
  GET_CANDIDATURES_REQUEST,
  GET_CANDIDATURES_SUCCESS,
  GET_CANDIDATURES_FAIL,
  GET_CANDIDATURES_RESET,
  ANNULER_CANDIDATURE_REQUEST,
  ANNULER_CANDIDATURE_SUCCESS,
  ANNULER_CANDIDATURE_FAIL,
  GET_CANDIDATURES_OFFER_REQUEST,
  GET_CANDIDATURES_OFFER_SUCCESS,
  GET_CANDIDATURES_OFFER_FAIL,
  GET_CANDIDATURES_OFFER_RESET,
  GET_CANDIDATURE_DETAIL_REQUEST,
  GET_CANDIDATURE_DETAIL_SUCCESS,
  GET_CANDIDATURE_DETAIL_FAIL,
  GET_CANDIDATURE_DETAIL_RESET,
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

export const offrePostulerReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTULER_OFFRE_REQUEST:
      return { Loading: true };
    case POSTULER_OFFRE_SUCCESS:
      return { Loading: false, successPostuler: true };
    case POSTULER_OFFRE_FAIL:
      return { Loading: false, errorPostuler: payload };
    case POSTULER_OFFRE_RESET:
      return {};
    default:
      return state;
  }
};

export const candidatCandidaturesReducer = (
  state = { candidatures: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CANDIDATURES_REQUEST:
      return { Loading: true };
    case GET_CANDIDATURES_SUCCESS:
      return { Loading: false, candidatures: payload };
    case GET_CANDIDATURES_FAIL:
      return { Loading: false, error: payload };
    case GET_CANDIDATURES_RESET:
      return {};
    default:
      return state;
  }
};

export const candidatureCancelReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ANNULER_CANDIDATURE_REQUEST:
      return { Loading: true };
    case ANNULER_CANDIDATURE_SUCCESS:
      return { Loading: false, successCancel: true };
    case ANNULER_CANDIDATURE_FAIL:
      return { Loading: false, errorCancel: payload };
    default:
      return state;
  }
};

export const candidaturesOfferReducer = (
  state = { candidatures: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CANDIDATURES_OFFER_REQUEST:
      return { Loading: true };
    case GET_CANDIDATURES_OFFER_SUCCESS:
      return { Loading: false, candidatures: payload };
    case GET_CANDIDATURES_OFFER_FAIL:
      return { Loading: false, error: payload };
    case GET_CANDIDATURES_OFFER_RESET:
      return {};
    default:
      return state;
  }
};

export const detailCandidatureReducer = (
  state = { candidature: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CANDIDATURE_DETAIL_REQUEST:
      return { Loading: true };
    case GET_CANDIDATURE_DETAIL_SUCCESS:
      return { Loading: false, candidature: payload };
    case GET_CANDIDATURE_DETAIL_FAIL:
      return { Loading: false, error: payload };
    case GET_CANDIDATURE_DETAIL_RESET:
      return {};
    default:
      return state;
  }
};

export const candidatureOwnerCvReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CANDIDATURE_OWNER_CV_REQUEST:
      return { Loading: true };
    case GET_CANDIDATURE_OWNER_CV_SUCCESS:
      return { Loading: false, cv: payload };
    case GET_CANDIDATURE_OWNER_CV_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const candidatureOwnerPdpReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CANDIDATURE_OWNER_PDP_REQUEST:
      return { Loading: true };
    case GET_CANDIDATURE_OWNER_PDP_SUCCESS:
      return { Loading: false, image: payload };
    case GET_CANDIDATURE_OWNER_PDP_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};

export const changeStatusCandidatureReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_STATUS_CANDIDATURE_REQUEST:
      return { Loading: true };
    case CHANGE_STATUS_CANDIDATURE_SUCCESS:
      return { Loading: false, success: true };
    case CHANGE_STATUS_CANDIDATURE_FAIL:
      return { Loading: false, error: payload };
    default:
      return state;
  }
};
