import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from './home.png';
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";

export const Header = () => {

    const dispatch = useDispatch();
    const initial = {
        token: '',
        user: {}
    }

    const navigate = useNavigate();

    const datosReduxUsuario = useSelector(userData);

    const logOff = () => {
        dispatch(logout({ userPass: initial }))
        navigate("/")
    }
    const ResetHome = () => {
        navigate("/")
    }


    return (
        <div className='headerDesign'>
            <div onClick={() => ResetHome()} className='logoDesignHeader'><img id="logoHome" className='homeAvatar' src={Logo} alt="Home" /></div>
            <div className='servicesDesign'>
                <div className='servicesText' onClick={() => setTimeout(() => { navigate("/services") }, 200)}>Services</div>
            </div>
            <div className='headerLinksDesign'>
                {datosReduxUsuario.userPass.rol === "admin" &&
                    <div onClick={() => navigate("/admin")} className='linkDesign'>Admin</div>
                }
                {datosReduxUsuario.userPass.token !== "" ?
                    (<>
                        <div onClick={() => navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass?.name}</div>
                        <div className='linkDesign' onClick={() => logOff()}>Logout</div>
                    </>)
                    : (
                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>Login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>Register</div>
                        </>
                    )
                }
            </div>
        </div>
    );
};