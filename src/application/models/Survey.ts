import QuestionDTO from "application/dto/QuestionDTO";
import SurveyDTO from "application/dto/SurveyDTO";

export default class Survey implements SurveyDTO {
    private _id: number;
    private _title: string;
    private _description: string;
    private _isCurrentlyOpen: Boolean;
    private _targetNumberOfParticipants: number;
    private _category : string;
    private _isDraft: Boolean;
    private _questions: QuestionDTO[];

    constructor(
        id: number,
        title: string,
        description: string,
        targetNumberOfParticipants: number,
        category: string,
        isCurrentlyOpen: Boolean = true,
        isDraft: Boolean = true,
        questions: QuestionDTO[] = []
    ) {
        this._id = id;
        this._description = description;
        this._title = title;
        this._isCurrentlyOpen = isCurrentlyOpen;
        this._targetNumberOfParticipants = targetNumberOfParticipants;
        this._category = category
        this._isDraft = isDraft;
        this._questions = questions
    }

    get details(): SurveyDTO {
        return {
            id: this._id,
            title: this._title,
            description:  this._description,
            isCurrentlyOpen :  this._isCurrentlyOpen,
            isDraft: this._isDraft,
            targetNumberOfParticipants: this._targetNumberOfParticipants,
            category: this._category,
            questions: this._questions
        }
    }

    get id(): number {
        return this._id;
    }
    get state(): Boolean {
        return this._isDraft;
    }
    get title(): string {
        return this._title
    }

    get description(): string{
        return this._description
    }

    get isCurrentlyOpen(): Boolean {
        return this._isCurrentlyOpen
    }

    get targetNumberOfParticipants(): number {
        return this._targetNumberOfParticipants
    }

    get category(): string {
        return this._category;
    }

    get questions(): QuestionDTO[]{
        return this._questions;
    }

    set questions(questions: QuestionDTO[]){
        this._questions= questions;
    }

    set draft(value: Boolean){
        this._isDraft = value;
    }

    set id(value: number){
        this._id = value;
    }

    set isCurrentlyOpen(value: Boolean){
        this._isCurrentlyOpen = value;
    }
}