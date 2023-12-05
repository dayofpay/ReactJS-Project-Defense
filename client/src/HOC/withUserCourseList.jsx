// THIS WILL RETURN ALL COURSES THAT THE USER IS CURRENTLY IN

import { useState,useEffect, useContext } from "react";
import {  getUserCoursesList } from "../services/userServices";
import AuthContext from "../contexts/authContext";
export default function withUserCourseList(Component) {
  return function EnhancedComponent(props) {
    const [courseList, setCourseList] = useState([]);
    const {email} = useContext(AuthContext);
    useEffect(() => {
      const fetchAllCourses = async () => {
        try {
          const response = await getUserCoursesList(email);
          setCourseList(response);
        } catch (error) {
          console.error('Error while trying to fetch all courses:', error);
        }
      };

      fetchAllCourses();
    }, []);

    return <Component {...props} courseList={courseList} setCourseList={setCourseList} />;
  };
}
