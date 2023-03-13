import React, { useState, useEffect } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allMplus, allRaids, allMounts } from '../../../services/apiCalls';
import { CardPurchasemplus } from '../../../common/CardPurchasemplus/CardPurchasemplus';
import { CardPurchaseraid } from '../../../common/CardPurchaseraid/CardPurchaseraid';
import { CardPurchasemount } from '../../../common/CardPurchasemount/CardPurchasemount';
import { Button } from 'react-bootstrap';


export const Admin = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [allMythicplus, setAllMplus] = useState([]);
    const [allRaid, setAllRaid] = useState([]);
    const [allMount, setAllMount] = useState([]);


    useEffect(() => {
        if (userRDX.userPass.role !== 'admin') {
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


    useEffect(() => {
        if (allRaid.length === 0) {
            allRaids()
                .then(resultado => {
                    setAllRaid(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allRaid]);


    useEffect(() => {
        if (allMount.length === 0) {
            allMounts()
                .then(resultado => {
                    setAllMount(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allMount]);

    return (
        <div className='adminDesign'>
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
                        allMythicplus.map(
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
                        <td>Usuario</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Pendiente</td>
                        <td>Reclamado</td>
                        <td>Hecho</td>
                        <td>Reclamado por</td>
                    </tr>
                    {allRaid.length > 0 &&
                        allRaid.map(
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
                        <td>Usuario</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Pendiente</td>
                        <td>Reclamado</td>
                        <td>Hecho</td>
                        <td>Reclamado por</td>
                    </tr>
                    {allMount.length > 0 &&
                        allMount.map(
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