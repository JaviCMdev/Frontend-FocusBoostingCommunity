import React from 'react';
import Banner from './Focus-Horizontal.png';
import './Home.css';


export const Home = () => {

    return (
        <div className="homeDesign">
            <div className="homeBanner"><img className="bannerHome" src={Banner} alt="Banner" /></div>
        </div>
    )
};