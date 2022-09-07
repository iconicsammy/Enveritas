import SurveyDTO from 'application/dto/SurveyDTO';
import Survey from 'application/models/Survey';
import Dexie from 'dexie';

class SurveyDatabase extends Dexie {
    private surveysTable!: Dexie.Table<Survey, number>;
    //private surveysTable;
    constructor(databaseName : string = "survey_db") {
        super(databaseName);  
        this.version(1).stores({
            surveysTable: '++id,title,description'
          });    
      } 
  

    addNewSurvey(survey: Survey) {
        //delete survey.id;
        return this.surveysTable.add(survey);
    }
  
    getOpenSurveys = async () : Promise<Survey[]> => {
        try {
            return this.surveysTable.toArray();
         } catch (error) {
            throw error;
         }
      }
  }

export default SurveyDatabase;