import React, { useState } from 'react';
import { userData } from '../../pages/User/userSlice';
import { useSelector } from "react-redux";
import './CardPurchasemount.css';
import { Deletebuymount, Updatemount, Updatemountdone } from '../../services/apiCalls';


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

    const Claimmount = (mountid) => {
        let idmount = mountid
        Updatemount(userRDX.userPass.user, idmount, userRDX.userPass.token.data.userFound[0].discord)
            .then(resultado => {
                setMsg(resultado.data)
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    const Donemount = (mountid) => {
        let idmount = mountid
        Updatemountdone(userRDX.userPass.user, idmount)
            .then(resultado => {
                setMsg(resultado.data)
            })
            .catch(error => {
                setMsg(error.message);
            });
    }


    return (
        <tr className='cardPurchasemountDesign'>
            {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                <td>{mount.idUser.discord !== '' ? mount.idUser.discord : "Nombre usuario no disponible"}</td>
            }
            <td>{mount.idMount.name !== '' ? mount.idMount.name : "ID Mythic+ no disponible"}</td>
            <td>{mount.idMount.price !== '' ? mount.idMount.price : "ID User no disponible"}g</td>
            <td>{mount.pending ? "Si" : "No"}</td>
            <td>{mount.claimed ? "Si" : "No"}</td>
            <td>{mount.done ? "Si" : "No"}</td>
            <td>{mount.claimedby !== '' ? mount.claimedby : "Aun sin reclamar"}</td>
            {userRDX.userPass.role === 'admin' &&
                <div onClick={() => Deletemount(mount._id)} className='deleteDesign'>Borrar</div>
            }
            {mount.claimed === false && userRDX.userPass.role === 'booster' &&
                <div onClick={() => Claimmount(mount._id)} className='claimDesign'>Claim</div>
            }
            {mount.done === false && userRDX.userPass.role === 'booster' && mount.claimed === true && mount.claimedby == userRDX.userPass.token.data.userFound[0].discord &&
                <div onClick={() => Donemount(mount._id)} className='doneDesign'>Done</div>
            }
        </tr>
    )
}