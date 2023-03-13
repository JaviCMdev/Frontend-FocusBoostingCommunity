import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allMplus, allRaids, allMounts } from '../../../services/apiCalls';
import { CardPurchasemplus } from '../../../common/CardPurchasemplus/CardPurchasemplus';
import { CardPurchaseraid } from '../../../common/CardPurchaseraid/CardPurchaseraid';
import { CardPurchasemount } from '../../../common/CardPurchasemount/CardPurchasemount';


export const Profile = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [allMythicplus, setAllMplus] = useState([]);
    const [allRaid, setAllRaid] = useState([]);
    const [allMount, setAllMount] = useState([]);


    useEffect(() => {
        if (userRDX.userPass.token === '') {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (allMythicplus.length === 0) {
            allMplus()
                .then(resultado => {
                    setAllMplus(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allMythicplus]);

    const filterNamemplus = allMythicplus.filter((name) => name.idUser.name === userRDX.userPass.name)

    useEffect(() => {
        if (allRaid.length === 0) {
            allRaids()
                .then(resultado => {
                    setAllRaid(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allRaid]);

    const filterNameraid = allRaid.filter((name) => name.idUser.name === userRDX.userPass.name)

    useEffect(() => {
        if (allMount.length === 0) {
            allMounts()
                .then(resultado => {
                    setAllMount(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allMount]);

    const filterNamemount = allMount.filter((name) => name.idUser.name === userRDX.userPass.name)

    return (
        <div className='profileDesign'>
            <div className='titleText'>Datos personales</div>
            <div>Nombre: {userRDX.userPass.name}</div>
            <div>Email: {userRDX.userPass.token.data.userFound[0].email}</div>
            <div>Battletag: {userRDX.userPass.token.data.userFound[0].battletag}</div>
            <div>Discord: {userRDX.userPass.token.data.userFound[0].discord}</div>
            <div className='titleText'>Historial de pedidos</div>
            <div className='mplusTable'>
                <div className='titletableText'>Mythic+</div>
                <table className='rosterDesign'>
                    <tr className='cardPurchasemplusDesign'>
                        {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                            <td>Usuario</td>
                        }
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Pendiente</td>
                        <td>Reclamado</td>
                        <td>Hecho</td>
                        <td>Reclamado por</td>
                    </tr>
                    {allMythicplus.length > 0 &&
                        filterNamemplus.map(
                            mplus => {
                                return (
                                    <CardPurchasemplus mplus={mplus} key={mplus._id} />
                                )
                            }
                        )
                    }
                </table>
            </div>
            <div className='mplusTable'>
                <div className='titletableText'>Raid</div>
                <table className='rosterDesign'>
                    <tr className='cardPurchasemplusDesign'>
                        {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                            <td>Usuario</td>
                        }
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Pendiente</td>
                        <td>Reclamado</td>
                        <td>Hecho</td>
                        <td>Reclamado por</td>
                    </tr>
                    {allRaid.length > 0 &&
                        filterNameraid.map(
                            raid => {
                                return (
                                    <CardPurchaseraid raid={raid} key={raid._id} />
                                )
                            }
                        )
                    }
                </table>
            </div>
            <div className='mplusTable'>
                <div className='titletableText'>Mounts</div>
                <table className='rosterDesign'>
                    <tr className='cardPurchasemplusDesign'>
                        {userRDX.userPass.role === 'admin' || userRDX.userPass.role === 'booster' &&
                            <td>Usuario</td>
                        }
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Pendiente</td>
                        <td>Reclamado</td>
                        <td>Hecho</td>
                        <td>Reclamado por</td>
                    </tr>
                    {allMount.length > 0 &&
                        filterNamemount.map(
                            mount => {
                                return (
                                    <CardPurchasemount mount={mount} key={mount._id} />
                                )
                            }
                        )
                    }
                </table>
            </div>
        </div>
    )
}