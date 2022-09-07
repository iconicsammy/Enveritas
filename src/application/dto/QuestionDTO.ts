import { ValidationObject } from "views/user/components/QuestionsEditor/types";

type QuestionDTO = {
    id?: number,
    questionType: string,
    label: string,
    validations: ValidationObject,
    choices?: string[]
}

export default QuestionDTO;