import React from 'react';
import './CardMythicplus.css';

export const CardMythicplus = ({mythicplus}) => {
    
    return (
        <div className='cardMythicplusDesign'>
            <div>{mythicplus.name !== '' ? mythicplus.name : "Nombre no disponible"}</div>
            <div>{mythicplus.price !== '' ? mythicplus.price : "Precio no disponible"}g</div>
        </div>
    )
}