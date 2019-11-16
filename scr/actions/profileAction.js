import {CHANGE_PROFILE_INFO} from '../types/types';

export const profileAction = userInfo => {
  ///this will be request to the server, 
  return {
    type: CHANGE_PROFILE_INFO,
    payload: userInfo,
  };
};
