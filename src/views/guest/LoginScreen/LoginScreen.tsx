//import Authentication from "data/auth/Authentication"
//import User from "data/User/User"
import Translated from "views/shared/components/Translated/Translated"
import { useState, useContext } from "react"
import { useNavigate, useOutletContext } from "react-router-dom";
//import AlertContext from "store/contexts/AlertContext/AlertContext";
import backgroundImage from 'assets/images/background.svg';
import EnveritasHeader from "views/shared/components/EnveritasHeader/EnveritasHeader";
import Authentication from "application/network/Authentication";

const componentStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover'
}



const LoginScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false)
      
    const login = async () =>{
        try {
            setLoginStatus(true)
            const authResponse = await Authentication.login(email, password)

            //save user details in storage now
            setLoginStatus(false);
            navigate('/home/');
        } catch (error) {
            setLoginStatus(false)
        }
    }

    return (<div style={componentStyle} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center h-screen justify-center">
        <div className="mb-4">
            <EnveritasHeader />
        </div>
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
                <Translated translatationKey="email"/>
      </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" 
                onChange={(text)=>setEmail(text.target.value)}
            />
        </div>

        <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2">
            <Translated translatationKey="password"/>
      </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" 
                 onChange={(text)=>setPassword(text.target.value)}
            />

        </div>


        <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" type="button"
            onClick={login}
            disabled={loginStatus}
            >
            <Translated translatationKey="signIn"/>
      </button>
        </div>

        <div className="flex items-right justify-between">
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            <Translated translatationKey="forgotPassword"/>
      </a>
        </div>
    </div>)

}

export default LoginScreen;