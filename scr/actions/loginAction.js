import {
  AUTHORIZATION_USER,
  AUTHORIZATION_SUCC,
  AUTHORIZATION_ERR,
} from '../types/types';
import {loginRequest} from '../services/loginRequest';

type Dispatch = (action: SubmCreditCardActions) => any;

export function loginAction(loginData) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AUTHORIZATION_USER,
    });
    new loginRequest().sendLoginData(loginData).then(
      data => {
        dispatch({type: AUTHORIZATION_SUCC, payload: data});
      },
      data => {
        dispatch({type: AUTHORIZATION_ERR, payload: data});
      },
    );
  };
}
