import { useContext } from "react";
import { SurveyProvider } from "store/contexts/SurveyContext/SurveyContext";
import ThemeContext, { ThemeProvider } from "store/contexts/SurveyContext/ThemeContext";
import AppRoutes from "views/NavigationRoutes/AppRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JSONFormBuilder from "views/shared/components/JSONFormBuilder/JSONFormBuilder";


function App() {
  return (
    <SurveyProvider>
    <div>
      <AppRoutes/>
      <ToastContainer />
    </div>
    </SurveyProvider>
  );
}


export default App;
