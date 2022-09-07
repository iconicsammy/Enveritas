/*
    Middleware service that handles survey requests either from network/API or local database
*/

import SurveyDTO from 'application/dto/SurveyDTO';
import SurveyDatabase from 'application/localDatabase/LocalDatabase';
import Survey from 'application/models/Survey';
import SurveyAPI from 'application/network/SurveyAPI';

class SurveyService {

  static instance: SurveyService;
  static surveyDB : SurveyDatabase;
  constructor() {
     

    if (!SurveyService.instance) {
      SurveyService.instance = this;
      SurveyService.surveyDB = new SurveyDatabase();
    }
    // Initialize object
    return SurveyService.instance;
  }

  private getOpenSurveysLocalDB = async () =>{
    try {
      return SurveyService.surveyDB.getOpenSurveys();
    } catch (error) {
      throw error;
    }
  }

  getOpenSurveys = async () : Promise<Survey[]> => {
    try {
      const surveys = await SurveyAPI.getOpenSurveys();
      return surveys;
    } catch (error) {
      return this.getOpenSurveysLocalDB();
    }
  }

  createNewSurvey = async (survey: Survey): Promise<SurveyDTO> => {
    /*
     try network first.
      then to local database.
    */
    survey.isCurrentlyOpen = false
    survey.draft = true
    let result: Survey;
    try {
      result = await SurveyAPI.createNewSurvey(survey.details);
    } catch (error) {
     
      const surveyId = await SurveyService.surveyDB.addNewSurvey(survey);
      survey.id = surveyId;
      result = survey;
    }
    return result;
  }


}

export default new SurveyService();