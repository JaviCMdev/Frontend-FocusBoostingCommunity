import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchaseraid.css';
import { Deletebuyraid } from '../../services/apiCalls';

export const CardPurchaseraid = ({ raid }) => {

    const userRDX = useSelector(userData);
    const [msg, setMsg] = useState('');

    const Deleteraid = (raidid) => {
        let idraid = raidid
        Deletebuyraid(userRDX.userPass.user, idraid)
            .then(resultado => {
                setMsg(resultado.data)
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <tr className='cardPurchaseraidDesign'>
            {userRDX.userPass.role === 'admin' &&
                <td>{raid.idUser.name !== '' ? raid.idUser.name : "Nombre usuario no disponible"}</td>
            }
                <td>{raid.idRaid.name !== '' ? raid.idRaid.name : "ID Mythic+ no disponible"}</td>
                <td>{raid.idRaid.price !== '' ? raid.idRaid.price : "ID User no disponible"}g</td>
                <td>{raid.idRaid.pending ? "No" : "Si"}</td>
                <td>{raid.idRaid.claimed ? "No" : "Si"}</td>
                <td>{raid.idRaid.done ? "No" : "Si"}</td>
                <td>{raid.idRaid.claimedby!== '' ? raid.idRaid.claimedby : "Aun sin reclamar"}</td>
                {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deleteraid(raid._id)} className='deleteDesign'>Borrar</div>
            }
        </tr>
    )
}