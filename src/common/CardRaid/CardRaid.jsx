import React from 'react';
import './CardRaid.css';

export const CardRaid = ({raid}) => {
    
    return (
        <div className='cardRaidDesign'>
            <div>{raid.name !== '' ? raid.name : "Nombre no disponible"}</div>
            <div>{raid.price !== '' ? raid.price : "Precio no disponible"}g</div>
        </div>
    )
}