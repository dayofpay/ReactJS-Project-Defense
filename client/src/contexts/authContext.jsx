import { createContext} from "react";
import * as authService from '../services/authServices'
import { useNavigate } from "react-router-dom";


import usePersistedState from "../hooks/usePersistedState";
import PATH_LIST from "../utils/PathList";
import { createUserSettings } from "../services/userServices";
import { createCourse } from "../services/courseServices";
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
    
    };

    const createCourseSubmitHandler = async (courseData) => {
      console.log(courseData);
      let courseObject = {
        course_name : courseData["course-name"],
        course_students : ["admin@abv.bg"], // Initial Value
        course_price : Number(courseData["course-price"]),
        course_image : courseData["course-image"],
        course_details : {
          'course_difficulity' : courseData["course-difficulity"],

        },
        course_lecturers: {
          "lecture_list": [
            courseData["instructor-name"],
          ]
      },
      course_description : courseData["course-description"],
      course_category : courseData["course-category"],
      }

      try{
        const result = await createCourse(courseObject);

        console.log(result);
      }
      catch(error){
        throw new Error('Error while trying to create course !',error);
      }
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
      createCourseSubmitHandler,
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