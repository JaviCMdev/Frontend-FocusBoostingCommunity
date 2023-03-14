import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchasemplus.css';
import { Deletebuymplus, Updatemythicplus, Updatemythicplusdone } from '../../services/apiCalls';


export const CardPurchasemplus = ({ mplus, setAllMplus }) => {

    const userRDX = useSelector(userData);
    const [msg, setMsg] = useState('');

    const Deletemplus = (mythicplusid) => {
        let idmythicplus = mythicplusid
        Deletebuymplus(userRDX.userPass.user, idmythicplus, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllMplus([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    const Claimmplus = (mythicplusid) => {
        let idmythicplus = mythicplusid
        Updatemythicplus(userRDX.userPass.user, idmythicplus, userRDX.userPass.token.data.userFound[0].discord, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllMplus([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    const Donemplus = (mythicplusid) => {
        let idmythicplus = mythicplusid
        Updatemythicplusdone(userRDX.userPass.user, idmythicplus, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllMplus([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <tr className='cardPurchasemplusDesign'>
            {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                <td>{mplus.idUser.discord !== '' ? mplus.idUser.discord : "Nombre usuario no disponible"}</td>
            }
            <td>{mplus.idMythicplus.name !== '' ? mplus.idMythicplus.name : "ID Mythic+ no disponible"}</td>
            <td>{mplus.idMythicplus.price !== '' ? mplus.idMythicplus.price : "ID User no disponible"}g</td>
            <td>{mplus.pending ? "Si" : "No"}</td>
            <td>{mplus.claimed ? "Si" : "No"}</td>
            <td>{mplus.done ? "Si" : "No"}</td>
            <td>{mplus.claimedby !== '' ? mplus.claimedby : "Aun sin reclamar"}</td>
            {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deletemplus(mplus._id)} className='deleteDesign'>Borrar</div>
            }
            {mplus.claimed === false && userRDX.userPass.role === 'booster' &&
                <div onClick={() => Claimmplus(mplus._id)} className='claimDesign'>Claim</div>
            }
            {mplus.done === false && userRDX.userPass.role === 'booster' && mplus.claimed === true && mplus.claimedby == userRDX.userPass.token.data.userFound[0].discord &&
                <div onClick={() => Donemplus(mplus._id)} className='doneDesign'>Done</div>
            }
        </tr>
    )
}