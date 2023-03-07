import React from 'react';
import './CardService.css';

export const CardService = ({service}) => {
    
    return (
        <div className='cardServiceDesign'>
            <div>{service.name !== '' ? service.name : "Nombre no disponible"}</div>
            <div>{service.price !== '' ? service.price : "Precio no disponible"}</div>
        </div>
    )
}