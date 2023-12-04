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