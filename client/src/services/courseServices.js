import * as request from '../lib/request';

export async function deleteCourse(id){

    const result = await request.remove('http://localhost:3030/data/courses/' + id,true);

    return result;
}