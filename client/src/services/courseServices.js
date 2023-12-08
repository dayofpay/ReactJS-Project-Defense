import * as request from '../lib/request';

export async function deleteCourse(id){

    const result = await request.remove('http://localhost:3030/data/courses/' + id,true);

    return result;
}

export async function createCourse(courseData){
    const result = await request.post('http://localhost:3030/data/courses',courseData);

    return result;
}

export async function getCourseData(courseId){
    const result = await request.get('http://localhost:3030/data/courses/' + courseId,true);

    return result;
}

export async function editCourse(courseId,updateData){
    const result = await request.patch('http://localhost:3030/data/courses/' + courseId,{...updateData},true);

    return result;
}

export async function addStudent(studentEmail, courseId) {
    const url = "http://localhost:3030/data/courses/" + courseId + "?select=course_students";

    try {
        // Step 1: Fetch the current students
        const currentStudents = await request.get(url, true);

        if (currentStudents.code === 404) {
            throw new Error('Unable to add the user since the described course does not exist!', currentStudents.message);
        }
        // Step 2 : Check if the student is already in the course

        let isInCourse = (currentStudents.course_students).includes(studentEmail);

        if(isInCourse){
            console.error('The user is already in course ' + courseId)
        return {error:'The user is already in this course'}

        }
        // Step 3: Add the studentEmail to the existing students
        const updatedStudents = [...currentStudents.course_students, studentEmail];

        // Step 4: Update the course_students array
        const addStudentResult = await request.patch(url, { course_students: updatedStudents }, true);

        return {message: 'You have successfully joined into this course'};
    } catch (error) {
        console.error("Error:", error.message);
        return {error:'The user is already in this course'}
    }
}
export async function removeStudent(studentEmail, courseId) {
    const url = "http://localhost:3030/data/courses/" + courseId + "?select=course_students";

    try {
        // Step 1: Fetch the current students
        const currentStudents = await request.get(url, true);

        if (currentStudents.code === 404) {
            throw new Error('Unable to remove the user since the described course does not exist!', currentStudents.message);
        }

        // Step 2: Check if the student is in the course
        const isInCourse = currentStudents.course_students.includes(studentEmail);

        if (!isInCourse) {
            throw new Error('The described user is not in course ' + courseId);
        }

        // Step 3: Remove the studentEmail from the existing students
        const updatedStudents = currentStudents.course_students.filter(email => email !== studentEmail);

        // Step 4: Update the course_students array
        const removeStudentResult = await request.patch(url, { course_students: updatedStudents }, true);

        return removeStudentResult

    } catch (error) {
        console.error("Error:", error.message);
    }
}
export async function getCourseStudents(courseId){
    const url = "http://localhost:3030/data/courses/" + courseId + "?select=course_students";
    try{
        const students = await request.get(url,true);

        if (students.code === 404) {
            throw new Error('Unable to fetch course data!', currentStudents.message);
        }

        return students;
    }catch(error){
        throw new Error('Unable to fetch course data!',error.message);
    }
}

export async function getCourseList(){
    const url = "http://localhost:3030/data/courses";

    const result = await request.get(url,true);

    return result;
}
export async function courseExists(courseId){
    const url = "http://localhost:3030/data/courses/" + courseId;

    const exists = await request.get(url,true);
    return exists;

}
export async function attachCourseFile(data){
    const url = "http://localhost:3030/data/course_files/";

    const result = await request.post(url,data,true);

    return result;
}

export async function getCourseFiles(courseId) {
  const url = `http://localhost:3030/data/course_files?where=course_id%3D%22${courseId}%22`;

  try {

    const isExist = await courseExists(courseId);


    if (!isExist) {
      return { error: "This course does not exist!" };
    }

    const result = await request.get(url, true);
    return result;
  } catch (error) {
    console.error("Error checking course existence:", error);
    return { error: "An error occurred while checking course." };
  }
}

export async function deleteCourseFile(fileId){
    const url = "http://localhost:3030/data/course_files/" + fileId;
    const result = await request.remove(url,true);

    return result;
}
export async function updateBalance(userId,newBalance){
    const url = "http://localhost:3030/data/user_details/" + userId;

    const result = await request.patch(url,{balance: newBalance},true);

    return result;
}
export async function joinCourse(courseId,userEmail){

    const userData_URL = `http://localhost:3030/data/user_details?where=email%3D%22${userEmail}%22`;
    const courseInfo_URL = `http://localhost:3030/data/courses/${courseId}`;
    // Get User Data

    const userData = await request.get(userData_URL,true);

    if(!userData){
        throw new Error('The user does not exists !');
    }

    // Check if user has enough balance to enroll into the course

    const userBalance = Number(userData[0]?.["balance"]);

    // Get Course Info

    const courseInfo = await request.get(courseInfo_URL,true);

    const course_price = Number(courseInfo["course_price"]);

    // if the course is free enroll the user into the course

    if(course_price === 0){
        const joinCourse = await addStudent(userEmail,courseId);

        return joinCourse;
    }

    if(userBalance - course_price >= 0){
        // get user id

        const req = await request.get(`http://localhost:3030/data/user_details?where=email%3D%22${userEmail}%22`);
        const userId = req[0]["_id"];

        updateBalance(userId,userBalance-course_price);
        const result = addStudent(userEmail,courseId);

        return result;
    }

    return {error: 'You dont have enough balance'};

}