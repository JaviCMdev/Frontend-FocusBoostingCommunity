import axios from 'axios';
const root = 'http://localhost:5500/';

export const postLogin = async (credenciales) => {
    return await axios.post(`${root}users/login`, credenciales);
};
export const postRegister = async (credenciales) => {
    return await axios.post(`${root}users/newuser`, credenciales);
};

export const getMythicplus = async () => {
    return await axios.get(`${root}mythicplus/getall`);
}

export const getRaid = async () => {
    return await axios.get(`${root}raid/getall`);
}

export const getMount = async () => {
    return await axios.get(`${root}mount/getall`);
}

export const getServer = async () => {
    return await axios.get(`${root}servers/getall`);
}

export const postRentMythicplus = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }
    return await axios.post(`${root}buymythicplus/newbuymythicplus`, body, config);
}

export const postRentRaid = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }
    return await axios.post(`${root}buyraid/newbuyraid`, body, config);
}

export const postRentMount = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }
    return await axios.post(`${root}buymount/newbuymount`, body, config);
}