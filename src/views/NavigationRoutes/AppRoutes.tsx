//import DashboardScreen from "Presentation/authenticated/DashboardScreen/DashboardScreen";
import LoginScreen from "views/guest/LoginScreen/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardScreen from "views/user/DashboardScreen/DashboardScreen";
import NewSurveyScreen from "views/user/NewSurveyScreen/NewSurveyScreen";
import SurveyListScreen from "views/user/SurveyListScreen/SurveyListScreen";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginScreen/>}/>
      <Route path="login" element={<LoginScreen/>}/>
      <Route path="home" element={<DashboardScreen/>} />
      <Route path="newSurvey" element={<NewSurveyScreen/>}/>
      <Route path="list" element={<SurveyListScreen />}/>
        
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes
