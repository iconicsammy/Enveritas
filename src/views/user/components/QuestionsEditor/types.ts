export interface QuestionProps {
    questionType: string
}

//a validation object is for e.g. {isRequired: true}
export interface ValidationObject {
    [key: string]: number | string | Boolean
}