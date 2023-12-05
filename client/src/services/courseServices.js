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
            throw new Error('The described user is already in course ' + courseId);
        }
        // Step 3: Add the studentEmail to the existing students
        const updatedStudents = [...currentStudents.course_students, studentEmail];

        // Step 4: Update the course_students array
        const addStudentResult = await request.patch(url, { course_students: updatedStudents }, true);

        return addStudentResult;
    } catch (error) {
        console.error("Error:", error.message);
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