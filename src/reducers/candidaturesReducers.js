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
