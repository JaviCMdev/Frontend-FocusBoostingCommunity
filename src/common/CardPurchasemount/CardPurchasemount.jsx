import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchasemount.css';
import { Deletebuymount } from '../../services/apiCalls';

export const CardPurchasemount = ({ mount }) => {

    const userRDX = useSelector(userData);
    const [msg, setMsg] = useState('');


    const Deletemount = (mountid) => {
        let idmount = mountid
        Deletebuymount(userRDX.userPass.user, idmount)
            .then(resultado => {
                setMsg(resultado.data)
            })
            .catch(error => {
                setMsg(error.message);
            });
    }


    return (
        <tr className='cardPurchasemountDesign'>
            {userRDX.userPass.role === 'admin' &&
                <td>{mount.idUser.name !== '' ? mount.idUser.name : "Nombre usuario no disponible"}</td>
            }
            <td>{mount.idMount.name !== '' ? mount.idMount.name : "ID Mythic+ no disponible"}</td>
            <td>{mount.idMount.price !== '' ? mount.idMount.price : "ID User no disponible"}g</td>
            <td>{mount.idMount.pending ? "No" : "Si"}</td>
            <td>{mount.idMount.claimed ? "No" : "Si"}</td>
            <td>{mount.idMount.done ? "No" : "Si"}</td>
            <td>{mount.idMount.claimedby !== '' ? mount.idMount.claimedby : "Aun sin reclamar"}</td>
            {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deletemount(mount._id)} className='deleteDesign'>Borrar</div>
            }
        </tr>
    )
}