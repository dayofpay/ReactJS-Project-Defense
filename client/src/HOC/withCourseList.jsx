import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { getAllCourses, getUserCoursesList } from "../services/userServices";
export default function withCourseList(Component) {
  return function EnhancedComponent(props) {
    const { id } = useContext(AuthContext);
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
      const fetchCourseList = async () => {
        try {
          const response = await getUserCoursesList(id);
          console.log(response);
          setCourseList(response);
        } catch (error) {
          console.error("Error fetching user courses:", error);
        }
      };

      fetchCourseList();
    }, [id]);

    return <Component {...props} courseList={courseList} />;
  };
}

export function withAllCourses(Component){
  return function EnhancedComponent(props){
    const [courseList,setCourseList] = useState([]);

    useEffect(() => {
      const fetchAllCourses = async() => {
        try{
          const response = await getAllCourses();
          setCourseList(response);
        }catch(error){
          console.error('Error while trying to fetch all xcourses');
        }
      }

      fetchAllCourses();
    },[]);

    return <Component {...props} courseList={courseList} />
  }
}