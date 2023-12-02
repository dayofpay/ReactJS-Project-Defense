import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users'
export const login = async (email,password) => {
    const result = await request.post(`${baseUrl}/login`,{
        email,
        password,
    });

    return result;
}

export const register = async (email,password) => {

    const initalRegisterValues = {
        balance : 0,
        isStaff : false,
    }
    const result = await request.post(`${baseUrl}/register`,{email,password,...initalRegisterValues});
    return result;; 
}

export const logout = async() => {
    const result = await request.get(`${baseUrl}/logout`);

    return result;
}