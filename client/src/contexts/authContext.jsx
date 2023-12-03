import { createContext} from "react";
import * as authService from '../services/authServices'
import { useNavigate } from "react-router-dom";


import usePersistedState from "../hooks/usePersistedState";
import PATH_LIST from "../utils/PathList";
import { createUserSettings } from "../services/userServices";
export const AuthContext = createContext();

export const AuthProvider = ({
    children,

}) => {
    const navigate = useNavigate();
    const [auth,setAuth] = usePersistedState('auth',{});

    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email,values.password);
  
      if(result.code !== 403){
        navigate(PATH_LIST.home);
      }
      setAuth(result);
      localStorage.setItem('accessToken',result.accessToken);
      localStorage.setItem('user_id', result._id);

      
    }
  
    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email,values.password);
      const email = values.email;
      if(result.code !== 403){
        navigate(PATH_LIST.home);
      }
      setAuth(result);
      localStorage.setItem('accessToken',result.accessToken)
      await createUserSettings(email);
    
    }
    const logoutHandler = () => {
      setAuth({});
      localStorage.clear();
    
      navigate(PATH_LIST.home);
    }
  

    const logValues = {
      loginSubmitHandler,
      registerSubmitHandler,
      username: auth.username,
      password: auth.password,
      email: auth.email,
      isAuthenticated: !!auth.email,
      token: auth.accessToken,
      id : auth._id,
      logoutHandler,
  } 
     return (
        <AuthContext.Provider value={logValues}>
            {children}
        </AuthContext.Provider>
    )
}
AuthContext.displayName = 'AuthContext';
export default AuthContext;