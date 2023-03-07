import axios from 'axios';
const root = 'http://localhost:5500/';

export const postLogin = async (credenciales) => {
    return await axios.post(`${root}users/login`, credenciales);
};

export const getMythicplus = async () => {
    return await axios.get(`${root}mythicplus/getall`);
}

export const getRaid = async () => {
    return await axios.get(`${root}raid/getall`);
}