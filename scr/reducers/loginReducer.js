import {
  AUTHORIZATION_USER,
  AUTHORIZATION_SUCC,
  AUTHORIZATION_ERR,
  LOG_OUT,
  CHANGE_PROFILE_INFO,
} from '../types/types';
type InitialState = {|
  isLoading: boolean,
  isLogin: boolean,
  editableField: boolean,
  userInfo: ?{},
  userData: ?{},
|};
const initialState: InitialState = {
  isLoading: false,
  isLogin: false,
  editableField: true,
  userInfo: null,
  userMessageBase: null,
};

export const loginReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_USER:
      return {...state, editableField: false, isLoading: true};
    case AUTHORIZATION_SUCC:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        userMessageBase: action.payload.userMessageBase,
        isLogin: true,
      };
    case AUTHORIZATION_ERR:
      return {...state, editableField: true, isLoading: false};
    case LOG_OUT:
      return initialState;
    case CHANGE_PROFILE_INFO:
      return {
        ...state,
        userInfo: {...state.userInfo, ...action.payload},
      };
    default:
      return state;
  }
};
