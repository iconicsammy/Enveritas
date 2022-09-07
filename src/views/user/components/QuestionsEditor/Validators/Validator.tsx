import { ReactNode, useContext, useState } from "react";
import { SurveyContext } from "store/contexts/SurveyContext/SurveyContext";
import Translated from "views/shared/components/Translated/Translated";
import { QuestionProps } from "../types";
import IsRequired from "../Validators/IsRequired/IsRequired";
import MinMax from "./MinMax/MinMax";



interface QuestionValidatorProps extends QuestionProps {
    handleValidationChoices: Function
}



function Validator({questionType, handleValidationChoices}: QuestionValidatorProps) {

    const handleValidationChoice = (validation: Object ) =>{
        handleValidationChoices(validation)
    }
    
    //FIXME: this is costly on re-render.
    const maps: any = {
        "text" : [
            <IsRequired handleValidationChoice={handleValidationChoice}/>,
            <MinMax  handleValidationChoice={handleValidationChoice} option="minLength" labelTranslationKey="minimumLength"/>,
            <MinMax  handleValidationChoice={handleValidationChoice} option="maxLength" labelTranslationKey="maximumLength"/>
        ],
        "singleChoice":[
            <IsRequired  handleValidationChoice={handleValidationChoice}/>,
        ],
        "multiChoice":[
            <IsRequired  handleValidationChoice={handleValidationChoice}/>,
            <MinMax  handleValidationChoice={handleValidationChoice}option="minChoices" labelTranslationKey="minimumChoices"/>,
            <MinMax  handleValidationChoice={handleValidationChoice} option="maxChoices" labelTranslationKey="maximumChoices"/>
        ]
    }

  return (<>{maps[questionType]}</>)
}

export default Validator;
