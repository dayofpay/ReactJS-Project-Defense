import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { getUserCoursesList } from "../services/userServices";

export default function withCourseList(Component) {
  return function EnhancedComponent(props) {
    const { id } = useContext(AuthContext);
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
      const fetchCourseList = async () => {
        try {
          const response = await getUserCoursesList(id);
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