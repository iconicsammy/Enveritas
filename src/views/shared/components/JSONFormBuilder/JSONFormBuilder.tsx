import QuestionDTO from 'application/dto/QuestionDTO';
import SurveyDTO from 'application/dto/SurveyDTO';
import PropTypes from 'prop-types';
import { useState } from 'react';
import InputText from 'views/user/components/FormElements/InputTypeText/InputText';
import SelectMultipleChecks from 'views/user/components/FormElements/SelectMultipleChecks/SelectMultipleChecks';
import SelectSingleCheck from 'views/user/components/FormElements/SelectSingleCheck/SelectSingleCheck';


/*
    Given a json data, build the form
*/


interface FormFieldDetails {
    elementName: string,
    value: string | number | boolean
}



function JSONFormBuilder({ id, title, description, questions }: Partial<SurveyDTO>) {
    const [answers, setAnswers] = useState({})
    const [formFieldsStatus, setFormFieldsStatus ] = useState<string[]>([]); //the status of the form fields.

    const onChangeHandler = (value: FormFieldDetails) => {

        const newAnswer = { [value.elementName]: value.value }
        const updateAnswer = { ...answers, ...newAnswer }
        setAnswers(updateAnswer);
    }

    const handleFieldErrorStatus = (fieldName: string, fieldHasNoError: boolean) => {

        const existinFieldStatus = [...formFieldsStatus]
        const fieldIndex = existinFieldStatus.indexOf(fieldName)
        //if false, it means it is dirty.
        if (!fieldHasNoError){
         if (fieldIndex === -1){
           existinFieldStatus.push(fieldName)
         }
          
        } else{
            //remove it
            existinFieldStatus.splice(fieldIndex, 1)
        }
        setFormFieldsStatus(existinFieldStatus);
    }

    const buildUI = (questions: QuestionDTO[]) => {

        const elements: any[] = [];

        questions.forEach(question => {
            if (question.questionType === 'text') {
                elements.push(<InputText
                    defaultValue=''
                    validations={question.validations}
                    label={question.label}
                    onChangeHandler={onChangeHandler} 
                    handleFieldErrorStatus={handleFieldErrorStatus}
                    />
                    )
            } else if (question.questionType === 'singleChoice' && question.choices) {
                elements.push(<SelectSingleCheck defaultSelectedValue="" validations={question.validations}
                    label={question.label}
                    options={question.choices}
                    onChangeHandler={onChangeHandler} />)
            } else if (question.questionType === 'multiChoice' && question.choices) {
                elements.push(<SelectMultipleChecks validations={question.validations}
                    label={question.label}
                    options={question.choices}
                    onChangeHandler={onChangeHandler} />)
            }
        })
        return elements;
    }

    const handleSubmitButton = async () => {
        console.log(formFieldsStatus);
        if (formFieldsStatus.length > 0){
            alert("error")
        }else{
            console.log(answers)
            alert("See answers in logs....you are done!")
        }
    }

    return (
        <>
            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800">
                {title}
            </h3>
            <p>{description}</p>
            {questions && buildUI(questions)}

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">


                <button type="button" onClick={handleSubmitButton} className="btn btn-primary text-right">
                    Submit
                </button>

            </div>
        </>
    )
}

export default JSONFormBuilder
