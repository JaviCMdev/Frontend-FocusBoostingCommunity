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

export const allMplus = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return await axios.get(`${root}buymythicplus/getall`, config);
}

export const allRaids = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return await axios.get(`${root}buyraid/getall`, config);
}

export const allMounts = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return await axios.get(`${root}buymount/getall`, config);
}

export const Deletebuymplus = async (iduser, idbuymplus, token) => {

    let data = {
        "_id": iduser,
        "idmythicplus": idbuymplus
    };

    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return await axios.delete(`${root}buymythicplus/deletebuymythicplus`, { headers, data });
}

export const Deletebuymount = async (iduser, idbuymount, token) => {

    let data = {
        "_id": iduser,
        "idmount": idbuymount
    };

    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return await axios.delete(`${root}buymount/deletebuymount`, { headers, data });
}

export const Deletebuyraid = async (iduser, idbuyraid, token) => {

    let data = {
        "_id": iduser,
        "idraid": idbuyraid
    };

    let headers = {
        'Authorization': 'Bearer ' + token
    }
    return await axios.delete(`${root}buyraid/deletebuyraid`, { headers, data });
}

export const Updateraid = async (iduser, idraid, discordname, token) => {

    let data = {
        "_id": iduser,
        "idbuyraid": idraid,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buyraid/updatebuyraid`, data, config);
}

export const Updatemythicplus = async (iduser, idmythicplus, discordname, token) => {

    let data = {
        "_id": iduser,
        "idbuymythicplus": idmythicplus,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buymythicplus/updatebuymythicplus`, data, config);
}

export const Updatemount = async (iduser, idmount, discordname, token) => {

    let data = {
        "_id": iduser,
        "idbuymount": idmount,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buymount/updatebuymount`, data, config);
}

export const Updatemountdone = async (iduser, idmount, token) => {

    let data = {
        "_id": iduser,
        "idbuymount": idmount,
        "done": true
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buymount/updatebuymount`, data, config);
}

export const Updatemythicplusdone = async (iduser, idmplus, token) => {

    let data = {
        "_id": iduser,
        "idbuymythicplus": idmplus,
        "done": true
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buymythicplus/updatebuymythicplus`, data, config);
}

export const Updateraiddone = async (iduser, idraid, token) => {

    let data = {
        "_id": iduser,
        "idbuyraid": idraid,
        "done": true
    };

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }

    return await axios.put(`${root}buyraid/updatebuyraid`, data, config);
}