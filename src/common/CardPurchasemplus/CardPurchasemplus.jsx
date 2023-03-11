import React from 'react';
import './CardPurchasemplus.css';

export const CardPurchasemplus = ({ mplus }) => {

    return (
        <tr className='cardPurchasemplusDesign'>
            <tr>
                <th>Nivel de mitica</th>
                <th>Nombre de comprador</th>
            </tr>
            <tr>
                <td>{mplus.idMythicplus.name !== '' ? mplus.idMythicplus.name : "ID Mythic+ no disponible"}</td>
                <td>{mplus.idUser.name !== '' ? mplus.idUser.name : "ID User no disponible"}</td>
            </tr>
        </tr>
    )
}




{/* <div>Nivel de mitica = {mplus.idMythicplus.name !== '' ? mplus.idMythicplus.name : "ID Mythic+ no disponible"}</div>
<div>Nombre de comprador: {mplus.idUser.name !== '' ? mplus.idUser.name : "ID User no disponible"}</div> */}