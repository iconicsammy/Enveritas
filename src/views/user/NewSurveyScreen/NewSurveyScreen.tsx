import Survey from "application/models/Survey"
import { useState, useEffect, useContext } from "react"
import Translated from "views/shared/components/Translated/Translated"
import InputTextArea from "../components/FormElements/InputTextArea/InputTextArea"
import RootScreen from "../RootScreen/RootScreen"
import { SurveyContext } from "store/contexts/SurveyContext/SurveyContext"
import SurveyDTO from "application/dto/SurveyDTO";
import config from "config/config"
import SurveyService from "application/middleware/SurveyService"
import QuestionsEditor from "../components/QuestionsEditor/QuestionsEditor"
import Toaster from "utils/Toaster"
import { LocalizationContext } from 'store/contexts/LocalizationContext/LocalizationContext';
import { useNavigate } from "react-router-dom"
import SectionTitle from "views/shared/components/SectionTitle/SectionTitle"
import JSONFormBuilder from "views/shared/components/JSONFormBuilder/JSONFormBuilder"

const d= {
    "id": 38,
    "title": "Farmers Season 2023 Expectations",
    "description": "",
    "isCurrentlyOpen": false,
    "isDraft": true,
    "targetNumberOfParticipants": "100",
    "category": "Tech",
    "questions": [
      {
        "questionType": "text",
        "questionIdentifier": "ec450ddf-690a-4366-a7f3-e79ef7a48340",
        "label": "Whats your name?",
        "validations": {
          "isRequired": true,
          "minLength": 6
        },
        "choices": []
      },
      {
        "questionType": "singleChoice",
        "questionIdentifier": "7824d605-9b08-4948-b06c-742de5b6b3e3",
        "label": "Gender",
        "validations": {
          "isRequired": true,
          "minLength": 10
        },
        "choices": [
          "Male",
          "Female"
        ]
      }
    ]
  }

  


function NewSurveyScreen() {
    const navigate = useNavigate();
    const { translations } = useContext(LocalizationContext);
    const { setActiveSurvey, activeSurvey } = useContext(SurveyContext);
    const [surveyInformation, setSurveyInformation] = useState<SurveyDTO>({
        title: '',
        description: '',
        targetNumberOfParticipants: config.survey.defaultTargetParticipants,
        category: "Tech", //should come from an API or something.,
        questions: []
    });

    const onChangeHandler = (elementName: string, value: any) => {
        const record = {
            [elementName]: value
        }
        const newInfo = { ...surveyInformation, ...record }
        setSurveyInformation(newInfo);
    }


    const handleSaveButton = async () => {
        try {
            const survey = await SurveyService.createNewSurvey(new Survey(0, surveyInformation.title, surveyInformation.description, surveyInformation.targetNumberOfParticipants, surveyInformation.category, false, true, activeSurvey?.questions))
            setActiveSurvey(survey);
            Toaster.success(translations.getString("surveyCreated"))
            navigate('/home/');

        } catch (e) {
            Toaster.error(translations.getString("surveyCreationFailed"))
        }

    }




    return (
        <>
            <RootScreen>
            <JSONFormBuilder id={d.id} title={d.title} description={d.description} questions={d.questions} />
            
                <div className="flex justify-center">
                    <div className="bg-red-200 w-1/2 rounded overflow-hidden shadow-xl p-5">

                        <form className="space-y-4" action="#" method="POST">

                        <SectionTitle titleTranslatedKey="newSurvey" />

                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="grid gap-6">

                                    <div className="col-span-12">

                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700"><Translated translatationKey="surveyTitle" /></label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            onChange={(event) => onChangeHandler("title", event.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 outline-none focus:border-blue-400"
                                        />

                                    </div>

                                    <div className="col-span-12">

                                        <label htmlFor="targetNumberOfParticipants" className="block text-sm font-medium text-gray-700"><Translated translatationKey="targetParticipants" /></label>
                                        <input
                                            type="number"
                                            name="targetNumberOfParticipants"
                                            id="targetNumberOfParticipants"
                                            onChange={(event) => onChangeHandler("targetNumberOfParticipants", event.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 outline-none focus:border-blue-400"
                                        />

                                    </div>

                                    <div className="col-span-12">
                                        <InputTextArea defaultValue="" elementName="description" onChangeHandler={onChangeHandler} labelTransationKey="description" />
                                    </div>
                                </div>
                            </div>

                            <QuestionsEditor />

                            <div className="px-4 py-3 text-right sm:px-6">


                                <button type="button" onClick={handleSaveButton} className="btn btn-primary text-right">
                                    <Translated translatationKey="save" />
                                </button>

                            </div>
                        </form>

                    </div>
                </div>

            </RootScreen>
        </>
    )
}

export default NewSurveyScreen