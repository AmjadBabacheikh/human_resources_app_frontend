import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  listOffresReducer,
  offreDeleteReducer,
  listOffresAdminReducer,
  offreValidateReducer,
} from './reducers/offresReducers';
import {
  loginReducer,
  registerReducer,
  usersListReducer,
  userDeleteReducer,
  userChangeRoleReducer,
  userInfosReducer,
} from './reducers/userReducers';

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
