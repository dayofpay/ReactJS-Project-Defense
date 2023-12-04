import * as request from '../lib/request';

export async function deleteCourse(id){

    const result = await request.remove('http://localhost:3030/data/courses/' + id,true);

    return result;
}

export async function createCourse(courseData){
    const result = await request.post('http://localhost:3030/data/courses',courseData);

    return result;
}