import * as request from '../lib/request';

const endpoint = "http://localhost:3030/data/";

export async function getUserCoursesList(userId) {
    const courseList = [];
  try {
    const getCourseList = await request.get(endpoint + "courses");
    if (Array.isArray(getCourseList)) {
      getCourseList.map(course => {
        if (course.course_students && Array.isArray(course.course_students)) {
            if(course.course_students.includes(userId)){
                courseList.push(course);
            }
        }

      });
    } else {

      console.error("Invalid response format for courses");

    }
  } catch (error) {

    console.error("Error fetching courses:", error);

  }
  return courseList
}
