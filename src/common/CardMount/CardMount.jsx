import React from 'react';
import './CardMount.css';

export const CardMount = ({mount}) => {
    
    return (
        <div className='cardMountDesign'>
            <div>{mount.name !== '' ? mount.name : "Nombre no disponible"}</div>
            <div>{mount.price !== '' ? mount.price : "Precio no disponible"}g</div>
            <div><img className='imgMount' src={`${mount.img}`}/></div>
        </div>
    )
}