import SurveyDTO from "application/dto/SurveyDTO";
import SurveyService from "application/middleware/SurveyService";
import { useEffect, useState } from "react";
import Toaster from "utils/Toaster";
import Translated from "views/shared/components/Translated/Translated";

function SurveyListScreen(){

    const [surveys, setSurveys] = useState<SurveyDTO[]>([])

    useEffect(()=>{

        const getSurveys = async () => {
            try {
                const openSurveys = await SurveyService.getOpenSurveys();
                setSurveys(openSurveys);
            } catch (error) {
                Toaster.error("sorry error loading surveys")
            }
        }

        getSurveys();

    }, [surveys])

    const surveyIsOpen = (value: Boolean) => {
        return value ? "Yes" : "No"
    }

    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th><Translated translatationKey="title"/></th>
        <th>Status</th>
        <th>Actions</th>
   
      </tr>
    </thead>
    <tbody>
      {surveys.map(survey=>{
        return (
            <tr key={survey.id}>
                <td>{survey.title}</td>
                <td>{surveyIsOpen(survey.isCurrentlyOpen!!)}</td>
                <td>Edit | Delete</td>
            </tr>
        )
      })}
     
    </tbody>
  </table>
</div>

    )
}

export default SurveyListScreen;