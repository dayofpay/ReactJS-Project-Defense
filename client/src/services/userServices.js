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
export async function isUserStaff(){
  const match = JSON.parse(localStorage.getItem('auth'))['_id']

  const encodedMatch = encodeURIComponent(match);
  
  const query = new URLSearchParams({ 'where': `_ownerId="${encodedMatch}"` });
  
  const url = `http://localhost:3030/data/user_details?${query}`;
  

  const result = await request.get(url);
  return result?.[0]?.['isStaff'];
}

export async function createUserSettings(email){
  const url = 'http://localhost:3030/data/user_details';

  const result = request.post(url,{
    email,
    "balance": 0,
    "isStaff": false,
  });


  return result;
}