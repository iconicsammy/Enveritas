import PropTypes from 'prop-types';
import { createContext, ReactNode, useState } from 'react';
import SurveyDTO from 'application/dto/SurveyDTO';
import QuestionDTO from 'application/dto/QuestionDTO';
import Survey from 'application/models/Survey';


interface ISurveyContext {
  activeSurvey?: SurveyDTO;
  setActiveSurvey: (survey: SurveyDTO) => void,
  updateSurveyQuestions: (questions: QuestionDTO[])=>void
}

export const SurveyContext = createContext<ISurveyContext>({
  activeSurvey: undefined,
  setActiveSurvey: (survey: SurveyDTO) => {},
  updateSurveyQuestions: (questions: QuestionDTO[])=>{}

});

export const SurveyProvider = ({ children }: {children: ReactNode}) => {
  const [activeSurvey, setActiveSurvey] = useState<SurveyDTO>();

  const setSurvey = (survey: SurveyDTO) => {
    setActiveSurvey(survey)
    return survey;
  };

  const updateSurveyQuestions = (questions: QuestionDTO[]) =>{
    const data = {...activeSurvey}
    data.questions = questions;
    setActiveSurvey(data as SurveyDTO)
  }

 
  return (
    <SurveyContext.Provider
      value={{
        setActiveSurvey: setSurvey,
        activeSurvey,
        updateSurveyQuestions
      }}>
      {children}
    </SurveyContext.Provider>
  );
};

SurveyProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired
};
