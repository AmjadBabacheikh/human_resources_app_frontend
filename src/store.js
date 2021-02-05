import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  listOffresReducer,
  offreDeleteReducer,
  listOffresAdminReducer,
  offreValidateReducer,
  listOffresRecruteurReducer,
  offreCreateReducer,
  detailOffreReducer,
  latestOffresListReducer,
} from './reducers/offresReducers';
import {
  loginReducer,
  registerReducer,
  usersListReducer,
  userDeleteReducer,
  userChangeRoleReducer,
  userInfosReducer,
  profileUpdateReducer,
  userProfileReducer,
  userImageReducer,
  userCvReducer,
} from './reducers/userReducers';
import {
  offrePostulerReducer,
  candidatCandidaturesReducer,
  candidatureCancelReducer,
} from './reducers/candidaturesReducers';

const userLoginFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const reducer = combineReducers({
  listOffres: listOffresReducer,
  userLogin: loginReducer,
  userRegister: registerReducer,
  usersList: usersListReducer,
  offreDelete: offreDeleteReducer,
  listOffresAdmin: listOffresAdminReducer,
  userDelete: userDeleteReducer,
  offreValidate: offreValidateReducer,
  userChangeRole: userChangeRoleReducer,
  userInfos: userInfosReducer,
  profileUpdate: profileUpdateReducer,
  listOffresRecruteur: listOffresRecruteurReducer,
  offreCreate: offreCreateReducer,
  detailOffre: detailOffreReducer,
  offrePostuler: offrePostulerReducer,
  candidatCandidatures: candidatCandidaturesReducer,
  candidatureCancel: candidatureCancelReducer,
  userProfile: userProfileReducer,
  latestOffresList: latestOffresListReducer,
  userImage: userImageReducer,
  userCv: userCvReducer,
});
const initialState = {
  userLogin: {
    userInfo: userLoginFromStorage,
  },
};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
