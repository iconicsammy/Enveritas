import { useContext, useState } from "react";
import { SurveyContext } from "store/contexts/SurveyContext/SurveyContext";
import Translated from "views/shared/components/Translated/Translated";
import QuestionCard from "./QuestionCard/QuestionCard";
import * as uuid from "uuid";
import { ValidationObject } from "./types";

interface QuestionCardInterface {
  questionIdentifier: string,
  questionType: string,
  label: string,
  validations: ValidationObject,
  choices?: string[]
}

function QuestionsEditor() {
  const [questions, setQuestions] = useState<QuestionCardInterface[]>([])
  const [questionType, setQuestionType] = useState('text');
  const { updateSurveyQuestions } = useContext(SurveyContext);

  //updates local state and the context
  const syncQuestions = (questions: QuestionCardInterface[]) => {
    setQuestions(questions)
    updateSurveyQuestions(questions)

  }

  const handleDeleteQuestion = (questionIdentifier: string) => {
    const keepQuestions = questions.filter(q => {
      return q.questionIdentifier !== questionIdentifier
    });
    syncQuestions(keepQuestions)
  }

  const handleQuestionTypeSelection = (value: string) => {
    const currentQuestions: any[] = [...questions];
    if (value === "questionAddNew") return;
    const question: QuestionCardInterface = {
      questionType: value,
      questionIdentifier: uuid.v4(),
      label: "",
      validations: {},
      choices: []
    }

    currentQuestions.push(question)
    syncQuestions(currentQuestions);
  }

  const handleReOrderingQuestion = (direction: string, currentIndex: number) => {

    if (direction === 'up' && currentIndex === 0) return;
    if (direction === 'down' && currentIndex === questions.length - 1) return;

    let swapWithIndex = currentIndex;

    if (direction === 'up') {
      swapWithIndex = currentIndex - 1
    } else {
      swapWithIndex = currentIndex + 1
    }

    const updateQuestions = [...questions]

    const swappedQuestion = updateQuestions[swapWithIndex];
    updateQuestions[swapWithIndex] = updateQuestions[currentIndex]
    updateQuestions[currentIndex] = swappedQuestion;
    syncQuestions(updateQuestions)
  }

  const handleQuestionTitle = (currentIndex: number, label: string) => {
    const updateQuestions = [...questions]
    updateQuestions[currentIndex].label = label;
    setQuestions(updateQuestions)
    syncQuestions(updateQuestions);
  }

  const handleQuestionValidation = (currentIndex: number, validationRule: ValidationObject) => {
    const updateQuestions = [...questions]
    const validations: ValidationObject = updateQuestions[currentIndex].validations;
    const newValidations = { ...validations, ...validationRule };
    updateQuestions[currentIndex].validations = newValidations;
    syncQuestions(updateQuestions);
  }

  const handleChoiceQuestions = (currentIndex: number, choices: string[]) => {
    const updateQuestions = [...questions]
    updateQuestions[currentIndex].choices = choices;
    syncQuestions(updateQuestions);
  }

  return (<>
    {questions.map((question, index) => {
      return (<QuestionCard key={question.questionIdentifier} handleChoiceQuestions={handleChoiceQuestions} index={index} handleQuestionValidation={handleQuestionValidation} handleQuestionTitle={handleQuestionTitle} defaultValue={question.label} handleReOrderingQuestion={handleReOrderingQuestion} questionType={question.questionType} questionIdentifier={question.questionIdentifier} handleDeleteQuestion={handleDeleteQuestion} />)
    })}
    <div className="flex flex-row justify-center">
    <div className="form-control">
  <div className="input-group">
    <select className="select select-bordered" onChange={(event)=>setQuestionType(event.target.value)}>
      <option selected value="text"><Translated translatationKey="questionField" /></option>
      <option value="singleChoice"><Translated translatationKey="questionSingleChoiceField" /></option>
      <option value="multiChoice"><Translated translatationKey="questionMultipleChoiceField" /></option>
    </select>
    <button className="btn" type="button" onClick={()=>handleQuestionTypeSelection(questionType)}><Translated translatationKey="add"/></button>
  </div>
</div>

    </div>

  </>)
}

export default QuestionsEditor
