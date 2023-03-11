import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allMplus } from '../../../services/apiCalls';
import { CardPurchasemplus } from '../../../common/CardPurchasemplus/CardPurchasemplus';


export const Profile = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [allMythicplus, setAllMplus] = useState([]);

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

    const filterName = allMythicplus.filter((name) => name.idUser.name === userRDX.userPass.name)
    

    return (
        <div className='profileDesign'>
            <div>Nombre: {userRDX.userPass.name}</div>
            <div>Email: {userRDX.userPass.token.data.userFound[0].email}</div>
            <table className='rosterDesign'>
                {allMythicplus.length > 0 &&
                    filterName.map(
                        mplus => {
                            return (
                                <td key={mplus._id}>
                                    <CardPurchasemplus mplus={mplus} />
                                </td>
                            )
                        }
                    )
                }
            </table>
        </div>
    )
}