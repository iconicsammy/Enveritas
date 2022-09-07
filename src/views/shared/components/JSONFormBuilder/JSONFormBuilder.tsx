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
interface Values {
    elementName: string,
    value: string | number | boolean
}



function JSONFormBuilder({ id, title, description, questions }: Partial<SurveyDTO>) {
    const [answers, setAnswers] = useState({})


    const onChangeHandler = (value: Values) => {

        const newAnswer = { [value.elementName]: value.value }
        const updateAnswer = { ...answers, ...newAnswer }
        setAnswers(updateAnswer);
    }

    const buildUI = (questions: QuestionDTO[]) => {

        const elements: any[] = [];

        questions.forEach(question => {
            if (question.questionType === 'text') {
                elements.push(<InputText
                    defaultValue=''
                    validations={question.validations}
                    label={question.label}
                    onChangeHandler={onChangeHandler} />)
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
        console.log(answers)
        alert("See answers in logs....you are done!")

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
