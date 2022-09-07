import QuestionDTO from "./QuestionDTO";

type SurveyDTO = {
    id?: number,
    title: string,
    description: string,
    targetNumberOfParticipants: number,
    category: string,
    isCurrentlyOpen?: Boolean,
    isDraft?:Boolean,
    questions: QuestionDTO[]
}

export default SurveyDTO;