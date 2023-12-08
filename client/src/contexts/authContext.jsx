import { createContext} from "react";
import * as authService from '../services/authServices'
import { useNavigate } from "react-router-dom";


import usePersistedState from "../hooks/usePersistedState";
import PATH_LIST from "../utils/PathList";
import { createUserSettings, editUser, isUserStaff } from "../services/userServices";
import { addStudent, attachCourseFile, createCourse, editCourse, removeStudent } from "../services/courseServices";
import { EditCourseKeys,CreateCourseKeys, CourseFileKeys } from "../keys/form-keys";
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

    const addCourseStudentHandler = async(values) => {
      console.log(values);
      try{
        await addStudent(values?.["student-name"],values?.['course-id']);
      }
      catch(error){
        throw new Error(error);
      }
    }
    const removeStudentFromCourseHandkler = async(values) => {
      console.log(values);
      try{
        await removeStudent(values?.["student-name"],values?.['course-id']);
      }
      catch(error){
        throw new Error(error);
      }
    }

    const editUserHandler = async(values) => {
      const editObject = {
        balance : Number(values["user-balance"]),
        isStaff: values["user-is-staff"],
      }
      console.log(values["user-is-staff"]);
      // console.log(values,'Values');
      // console.log(editObject,'Edit Object');
      try{
        console.log(values);
        await editUser(values["user-id"],editObject);
      }catch(error){
        throw new Error('Unable to edit user',error);
      }
    }

    const attachFileContext = async(values) => {
      const email = JSON.parse(localStorage.getItem('auth'))["email"];
      const fileObject = {
        email,
        course_id : values[CourseFileKeys.CourseId],
        course_file_url : values[CourseFileKeys.FileURL],
        course_file_name : values[CourseFileKeys.FileName],
        attached_by : email.split("@")[0],
      }

      try{
        await attachCourseFile(fileObject);
      }catch(error){
        throw new Error('Unable to attach file',error);
      }
    }
    const logoutHandler = () => {
      setAuth({});
      localStorage.clear();
    
      navigate(PATH_LIST.home);
    }
    const isAdmin = async() => {
      try{
        const result = await isUserStaff().then((response) => {
          return response;
        });
      }catch(error){
        throw new Error(error);
      }
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
      addCourseStudentHandler,
      removeStudentFromCourseHandkler,
      editUserHandler,
      attachFileContext,
      isAdmin
  } 
     return (
        <AuthContext.Provider value={logValues}>
            {children}
        </AuthContext.Provider>
    )
}
AuthContext.displayName = 'AuthContext';
export default AuthContext;