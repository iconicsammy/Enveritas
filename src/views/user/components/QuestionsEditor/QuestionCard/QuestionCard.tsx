import { useState } from "react";
import Translated from "views/shared/components/Translated/Translated";
import { QuestionProps, ValidationObject } from "../types";
import Validator from "../Validators/Validator";
import { FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import MoveUpDown from "../../MoveUpDown/MoveUpDown";
import ChoicesEditor from "../ChoicesEditor/ChoicesEditor";


interface QuestionCardProps extends QuestionProps {
    handleDeleteQuestion: Function,
    questionIdentifier: string,
    index: number,
    handleReOrderingQuestion: Function,
    handleQuestionTitle: Function,
    defaultValue: string,
    handleQuestionValidation: Function,
    handleChoiceQuestions: Function
}



function QuestionCard({ questionType, handleQuestionValidation, handleChoiceQuestions, handleDeleteQuestion, index, handleQuestionTitle, questionIdentifier, handleReOrderingQuestion, defaultValue }: QuestionCardProps) {

    const [questionLabel, setQuestionLabel] = useState(defaultValue);
    const [collapse, setCollapse] = useState(false);


    const handleOnChange = (value: string) => {
        setQuestionLabel(value);
        handleQuestionTitle(index, value)
    }

    const deleteQuestionCard = () => {
        handleDeleteQuestion(questionIdentifier);
    }

    const toggleCollapse = () => {
        setCollapse(!collapse);
    }

    const handleOrdering = (direction: string) => {
        handleReOrderingQuestion(direction, index);
    }

    const handleQuestionsValidations = (validation: ValidationObject) => {
        handleQuestionValidation(index, validation)
    }

    const handleChoicesText = (text: string) => {
        /*
            given multiline text, convert it to an array of choices
        */
        const choices = text.split("\n")
        handleChoiceQuestions(index, choices);
    }


    return (<div className="w-full rounded-md border-2 pr-1 pl-4 pt-2 pb-5">
        <div className="grid grid-cols-12">
            <div className="col-span-11">
                <div className="flex flex-row justify-between">
                    <div className="text-black">{index + 1}</div>
                    <div className="flex flex-row">
                        <div className="mx-2" onClick={toggleCollapse}>
                            {collapse ? <FaChevronDown /> : <FaChevronUp />}
                        </div>
                        <div onClick={() => deleteQuestionCard()}><FaTrash size='1.5rem' /></div>
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700"><Translated translatationKey="question" /></label>
                    <input
                        type="text"
                        value={questionLabel}
                        className="w-full px-4 py-2 border border-gray-300 outline-none focus:border-blue-400"
                        defaultValue={defaultValue}
                        onChange={(event) => handleOnChange(event.target.value)}
                    />
                </div>

          

                <div className={collapse ? "hidden" : "display"}>
                {(questionType === 'singleChoice' || questionType === 'multiChoice') && <ChoicesEditor handleMultiLineText={handleChoicesText} />}
                    <div className="divider"></div>
                    <div className="text-black">
                        <Translated translatationKey="validations" />
                        <Validator questionType={questionType} handleValidationChoices={handleQuestionsValidations} />
                    </div>
                </div>


            </div>
            <div className="col-span-1 border-l mx-1">
                <MoveUpDown handleMoveUpDown={handleOrdering} />
            </div>
        </div>


    </div>)
}

export default QuestionCard
