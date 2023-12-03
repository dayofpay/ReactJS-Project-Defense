import * as request from '../lib/request';

export async function getSiteMembersCount(){
    const result = await request.get('http://localhost:3030/data/user_details?count');

    return result;
}

