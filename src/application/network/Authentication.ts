import AuthLoginResponse from 'application/dto/AuthLoginResponse';
import HttpWrapper from 'application/network/HttpWrapper';

const BASE_URL =  process.env.REACT_APP_BASE_URL;

class Authentication {
  
  static instance: Authentication;
  
  constructor() {
    if (!Authentication.instance) {
        Authentication.instance = this;
    }
    // Initialize object
    return Authentication.instance;
  }

  login = async (email: string, password: string): Promise<AuthLoginResponse> => {
     try {
        const auth = await HttpWrapper.post(`${BASE_URL}login/`, {email, password});
        return auth.data;
     } catch (error) {
        throw error;
     }
  }

  //TODO: implement logout, forgot password methods.
}

export default new Authentication();
