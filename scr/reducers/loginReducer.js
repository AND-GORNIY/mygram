import {
  AUTHORIZATION_USER,
  AUTHORIZATION_SUCC,
  AUTHORIZATION_ERR,
} from '../types/types';
type InitialState = {|
  isLoading: boolean,
  isLogin: boolean,
  editableField: boolean,
  userData: ?{},
|};
const initialState: InitialState = {
  isLoading: false,
  isLogin: false,
  editableField: true,
  userData: null,
};

export const loginReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_USER:
      return {...state, editableField: false, isLoading: true};
    case AUTHORIZATION_SUCC:
      return {...state, userData: action.payload, isLogin: true};
    case AUTHORIZATION_ERR:
      return {...state, editableField: true, isLoading: false};
    default:
      return state;
  }
};
