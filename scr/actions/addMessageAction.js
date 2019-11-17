import {SEND_MESSAGE} from '../types/types';

export const addMessageAction = updateArray => {
  ///this will be request to the server,

  return {
    type: SEND_MESSAGE,
    payload: updateArray,
  };
};
