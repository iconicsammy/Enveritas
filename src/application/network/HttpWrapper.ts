import axios from 'axios';


/*
  A wrapper around HTTP calls.

*/

class HttpWrapper {
  
  static instance: HttpWrapper;
  
  constructor() {
    if (!HttpWrapper.instance) {
        HttpWrapper.instance = this;
    }
    // Initialize object
    return HttpWrapper.instance;
  }


  post = async (url: string, body = {}, headers = {}) => {
    try {
      return await axios.post(url, body, { headers });
    } catch (error) {
      throw error;
    }
  };

  get = async (url: string, headers = {}) => {

    try {
      return await axios.get(url, { headers });
    } catch (error) {
      throw error;
    }
  };

  //TODO: implement put/update and delete methods.
}


export default new HttpWrapper();
