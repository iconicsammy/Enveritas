import SurveyDTO from 'application/dto/SurveyDTO';
import Survey from 'application/models/Survey';
import HttpWrapper from 'application/network/HttpWrapper';

const BASE_URL =  process.env.REACT_APP_BASE_URL;

class SurveyAPI {
  
  static instance: SurveyAPI;
  
  constructor() {
    if (!SurveyAPI.instance) {
      SurveyAPI.instance = this;
    }
    // Initialize object
    return SurveyAPI.instance;
  }

  getOpenSurveys = async () : Promise<Survey[]> => {
    try {
        const result = await HttpWrapper.get(`${BASE_URL}surveys/?isCurrentlyOpen=true`);
        return result.data;
     } catch (error) {
        throw error;
     }
  }

  createNewSurvey = async (survey: SurveyDTO) : Promise<Survey> => {
    try {
        const result = await HttpWrapper.post(`${BASE_URL}surveys/`, survey);
        return result.data;
     } catch (error) {
        throw error;
     }
  }

}

export default new SurveyAPI();
