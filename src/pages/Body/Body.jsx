import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Services } from '../ServicesPage/Services';
import { Admin } from '../User/Admin/Admin';
import { Booster } from '../User/Booster/Booster';
import { Login } from '../User/Login/Login';
import { Profile } from '../User/Profile/Profile';
import { Register } from '../User/Register/Register';

import './Body.css';

export const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<Profile />}/>
            {/* Booster Zone */}
            <Route path="/booster" element={<Booster />}/>
            {/* Admin secret */}
            <Route path="/admin" element={<Admin />}/>
        </Routes>
    )
};