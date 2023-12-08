import * as request from '../lib/request';
import convertTimestamp from '../utils/timeConvert';

const endpoint = "http://localhost:3030/data/";

export async function getUserCoursesList(userEmail) {
    const courseList = [];
  try {
    const getCourseList = await request.get(endpoint + "courses");
    if (Array.isArray(getCourseList)) {
      getCourseList.map(course => {
        if (course.course_students && Array.isArray(course.course_students)) {
            if(course.course_students.includes(userEmail)){
                courseList.push(course);
            }
        }

      });
    } else {

      console.error("Invalid response format for courses");

    }
  } catch (error) {
    throw new Error('Error while trying to fetch courses !');

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
export async function getAllCourses() {
  const courseList = [];
try {
  const getCourseList = await request.get(endpoint + "courses");
  if (Array.isArray(getCourseList)) {
    getCourseList.map(course => {
      if (course.course_students && Array.isArray(course.course_students)) {
        courseList.push(course);
      }

    });
  } else {

    console.error("Invalid response format for courses");

  }
} catch (error) {

  console.error("Error fetching courses:", error);
  localStorage.clear();
  location.href = "/login";
}
return courseList
}


export function getStudentName(studentEmail){

  return studentEmail.split('@')[0];
}

export async function getUserDetails(data,identifier){
  const match = data;
  const url = `http://localhost:3030/data/user_details?where=${identifier}%3D%22${match}%22`;
  const result = await request.get(url,true);
  console.log(url);
  return result[0]

}


export async function getUserList(){
  const url = "http://localhost:3030/data/user_details";

  const result = await request.get(url,true);

  return result;
}

export async function editUser(id,data){
  const url = "http://localhost:3030/data/user_details/";

  const result = await request.patch(url + id,data,true);

  return result;
}