import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchasemplus.css';
import { Deletebuymplus } from '../../services/apiCalls';

export const CardPurchasemplus = ({ mplus }) => {

    const userRDX = useSelector(userData);
    const [msg, setMsg] = useState('');


    const Deletemplus = (mythicplusid) => {
        let idmythicplus = mythicplusid
        Deletebuymplus(userRDX.userPass.user, idmythicplus)
            .then(resultado => {
                setMsg(resultado.data)
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <tr className='cardPurchasemplusDesign'>
            {userRDX.userPass.role === 'admin' &&
                <td>{mplus.idUser.name !== '' ? mplus.idUser.name : "Nombre usuario no disponible"}</td>
            }
            <td>{mplus.idMythicplus.name !== '' ? mplus.idMythicplus.name : "ID Mythic+ no disponible"}</td>
            <td>{mplus.idMythicplus.price !== '' ? mplus.idMythicplus.price : "ID User no disponible"}g</td>
            <td>{mplus.idMythicplus.pending ? "No" : "Si"}</td>
            <td>{mplus.idMythicplus.claimed ? "No" : "Si"}</td>
            <td>{mplus.idMythicplus.done ? "No" : "Si"}</td>
            <td>{mplus.idMythicplus.claimedby !== '' ? mplus.idMythicplus.claimedby : "Aun sin reclamar"}</td>
            {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deletemplus(mplus._id)} className='deleteDesign'>Borrar</div>
            }
        </tr>
    )
}