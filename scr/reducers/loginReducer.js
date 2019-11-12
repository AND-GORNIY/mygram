//@flow
import {AUTHORIZATION_USER} from '../types/types';
type InitialState = {|
  isLoading: boolean,
  isLogin: boolean,
  editableFild: boolean,
|};
const initialState: InitialState = {
  isLoading: false,
  isLogin: false,
  editableFild: true,
};

export const loginReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_USER:
      return {...state, editableFild: false, isLoading: true};
    default:
      return state;
  }
};
