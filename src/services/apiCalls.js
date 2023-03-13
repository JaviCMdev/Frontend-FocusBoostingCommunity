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

export const Deletebuymplus = async (iduser, idbuymplus) => {
    // let body = {
    //     _id: iduser,
    //     idmythicplus: idbuymplus
    // }
    let data = JSON.stringify({
        "_id": iduser,
        "idmythicplus": idbuymplus
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    return await axios.delete(`${root}buymythicplus/deletebuymythicplus`, config);
}

export const Deletebuymount = async (iduser, idbuymount) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idmount": idbuymount
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    return await axios.delete(`${root}buymount/deletebuymount`, config);
}

export const Deletebuyraid = async (iduser, idbuyraid) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idraid": idbuyraid
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    return await axios.delete(`${root}buyraid/deletebuyraid`, config);
}

export const Updateraid = async (iduser, idraid, discordname) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuyraid": idraid,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buyraid/updatebuyraid`, config);
}

export const Updatemythicplus = async (iduser, idmythicplus, discordname) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuymythicplus": idmythicplus,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buymythicplus/updatebuymythicplus`, config);
}

export const Updatemount = async (iduser, idmount, discordname) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuymount": idmount,
        "pending": false,
        "claimed": true,
        "claimedby": discordname
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buymount/updatebuymount`, config);
}

export const Updatemountdone = async (iduser, idmount) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuymount": idmount,
        "done": true
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buymount/updatebuymount`, config);
}

export const Updatemythicplusdone = async (iduser, idmplus) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuymythicplus": idmplus,
        "done": true
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buymythicplus/updatebuymythicplus`, config);
}

export const Updateraiddone = async (iduser, idraid) => {

    let data = JSON.stringify({
        "_id": iduser,
        "idbuyraid": idraid,
        "done": true
      });
    
    let config = {
        headers: { 
            'Content-Type': 'application/json'
          },
        data : data
    }
    
    return await axios.put(`${root}buyraid/updatebuyraid`, config);
}