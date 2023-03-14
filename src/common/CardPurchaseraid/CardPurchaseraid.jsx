import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchaseraid.css';
import { Deletebuyraid, Updateraid, Updateraiddone } from '../../services/apiCalls';


export const CardPurchaseraid = ({ raid, setAllRaid }) => {

    const userRDX = useSelector(userData);
    const [msg, setMsg] = useState('');

    const Deleteraid = (raidid) => {
        let idraid = raidid
        Deletebuyraid(userRDX.userPass.user, idraid, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllRaid([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    const Claimraid = (raidid) => {
        let idraid = raidid
        Updateraid(userRDX.userPass.user, idraid, userRDX.userPass.token.data.userFound[0].discord, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllRaid([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    const Doneraid = (raidid) => {
        let idraid = raidid
        Updateraiddone(userRDX.userPass.user, idraid, userRDX.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setAllRaid([])
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <tr className='cardPurchaseraidDesign'>
            {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                <td>{raid.idUser.discord !== '' ? raid.idUser.discord : "Nombre usuario no disponible"}</td>
            }
            <td>{raid.idRaid.name !== '' ? raid.idRaid.name : "ID Mythic+ no disponible"}</td>
            <td>{raid.idRaid.price !== '' ? raid.idRaid.price : "ID User no disponible"}g</td>
            <td>{raid.pending ? "Si" : "No"}</td>
            <td>{raid.claimed ? "Si" : "No"}</td>
            <td>{raid.done ? "Si" : "No"}</td>
            <td>{raid.claimedby !== '' ? raid.claimedby : "Aun sin reclamar"}</td>
            {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deleteraid(raid._id)} className='deleteDesign'>Borrar</div>
            }
            {raid.claimed === false && userRDX.userPass.role === 'booster' &&
                <div onClick={() => Claimraid(raid._id)} className='claimDesign'>Claim</div>
            }
            {raid.done === false && userRDX.userPass.role === 'booster' && raid.claimed === true && raid.claimedby == userRDX.userPass.token.data.userFound[0].discord &&
                <div onClick={() => Doneraid(raid._id)} className='doneDesign'>Done</div>
            }
        </tr>
    )
}