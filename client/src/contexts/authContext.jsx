import { createContext} from "react";
import * as authService from '../services/authServices'
import { useNavigate } from "react-router-dom";


import usePersistedState from "../hooks/usePersistedState";
import PATH_LIST from "../utils/PathList";
import { createUserSettings } from "../services/userServices";
import { createCourse, editCourse } from "../services/courseServices";
import { EditCourseKeys,CreateCourseKeys } from "../keys/form-keys";
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

    
      let courseObject = {
        course_name: courseData[CreateCourseKeys.CourseName],
        course_students: ["admin@abv.bg"], // Initial Value
        course_price: Number(courseData[CreateCourseKeys.CoursePrice]),
        course_image: courseData[CreateCourseKeys.CourseImage],
        course_details: {
          course_difficulity: courseData[CreateCourseKeys.CourseDifficulity],
        },
        course_lecturers: {
          lecturers_list: [courseData[CreateCourseKeys.InstructorName]],
        },
        course_description: courseData[CreateCourseKeys.CourseDescription],
        course_category: courseData[CreateCourseKeys.CourseCategory],
      };
    
      try {
        const result = await createCourse(courseObject);
    
        console.log(result);
      } catch (error) {
        throw new Error('Error while trying to create course!', error);
      }
    };
    
    const editCourseSubmitHandler = async (courseData) => {
      console.log(courseData);
    
      const courseObject = {
        course_name: courseData[EditCourseKeys.CourseName],
        course_price: Number(courseData[EditCourseKeys.CoursePrice]),
        course_image: courseData[EditCourseKeys.CourseImage],
        course_details: {
          course_difficulity: courseData[EditCourseKeys.CourseDifficulity],
        },
        course_lecturers: {
          lecturers_list: [courseData[EditCourseKeys.InstructorName]],
        },
        course_description: courseData[EditCourseKeys.CourseDescription],
        course_category: courseData[EditCourseKeys.CourseCategory],
      };
    
      try {
        const result = await editCourse(courseData[EditCourseKeys.CourseId], courseObject);
    
        console.log(result);
      } catch (error) {
        throw new Error('Error while trying to update course!', error);
      }
    };
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
      editCourseSubmitHandler,
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