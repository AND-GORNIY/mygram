import {validation} from './validation';
import {getDataMessage} from '../serverDataBase/sarverDataBase';
type UserInfo = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
};

const callAPI = (data: UserInfo): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = validation(data);
      if (result) {
        const dataUser = getDataMessage();
        resolve(dataUser);
      }
      reject(result);
    }, 300);
  });
};

export class loginRequest {
  sendLoginData(data: UserInfo) {
    return callAPI(data);
  }
}
