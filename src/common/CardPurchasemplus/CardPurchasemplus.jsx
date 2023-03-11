import React from 'react';
import './CardPurchasemplus.css';

export const CardPurchasemplus = ({ mplus }) => {

    return (
        <tr className='cardPurchasemplusDesign'>
                <td>{mplus.idMythicplus.name !== '' ? mplus.idMythicplus.name : "ID Mythic+ no disponible"}</td>
                <td>{mplus.idMythicplus.price !== '' ? mplus.idMythicplus.price : "ID User no disponible"}g</td>
                <td>{mplus.idMythicplus.pending ? "No" : "Si"}</td>
                <td>{mplus.idMythicplus.claimed ? "No" : "Si"}</td>
                <td>{mplus.idMythicplus.done ? "No" : "Si"}</td>
                <td>{mplus.idMythicplus.claimedby!== '' ? mplus.idMythicplus.claimedby : "Aun sin reclamar"}</td>
        </tr>
    )
}