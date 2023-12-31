// THIS WILL RETURN ALL COURSES IN THE COLLECTION

import { useState,useEffect } from "react";
import { getAllCourses } from "../services/userServices";
export default function withAllCourses(Component) {
  return function EnhancedComponent(props) {
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
      const fetchAllCourses = async () => {
        try {
          const response = await getAllCourses();
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
