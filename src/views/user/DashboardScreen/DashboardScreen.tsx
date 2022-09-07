import Survey from "application/models/Survey"
import SurveyAPI from "application/network/SurveyAPI"
import { useState, useEffect } from "react"
import SectionTitle from "views/shared/components/SectionTitle/SectionTitle"
import PieChart from "../components/Charts/PieChart"
import NumberCard from "../components/NumberCard/NumberCard"
import SurveyTable from "../components/SurveyTable/SurveyTable"
import RootScreen from "../RootScreen/RootScreen"



function DashboardScreen() {
    const [openSurveys, setOpenSurveys] = useState<Survey[]>([]);

    useEffect(() => {
        const getOpenSurveys = async () => {
            try {
                const result = await SurveyAPI.getOpenSurveys()
                setOpenSurveys(result);
            } catch (error) {
                alert("There was an error fetching open surveys")
            }

        }
        getOpenSurveys();
    }, [])

    const statButtonsClickHandler = (clickedBtnCaption: string) => {
        //TODO: open a new screen for the required status
    }

    const pieChartData = [
        {
            x: "Tech",
            y: 14
        },
        {
            x: "Farmers Choice",
            y: 25
        },
        {
            x: "Family Size",
            y: 10
        }
    ]
    return (
        <>
            <RootScreen>

                <div className="stats bg-primary text-primary-content flex mb-7">
                    <NumberCard value={45} decimalPoints={0} titleKey="openSurveys" btnCaptionKey="viewList" btnClickHandler={statButtonsClickHandler} />
                    <NumberCard value={10} decimalPoints={0} titleKey="draftSurveys" btnCaptionKey="viewList" btnClickHandler={statButtonsClickHandler} />
                    <NumberCard value={21} decimalPoints={0} titleKey="closedSurveys" btnCaptionKey="viewList" btnClickHandler={statButtonsClickHandler} />
                </div>

                <div className="columns-2">
                    <div className="overflow-x-auto">
                        <SurveyTable data={openSurveys} tableTitleTranslationKey="openSurveys" />
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex justify-center">
                            <SectionTitle titleTranslatedKey="surveyCategories" /></div>
                        <PieChart data={pieChartData} />
                    </div>
                </div>
            </RootScreen>

        </>
    )
}

export default DashboardScreen
