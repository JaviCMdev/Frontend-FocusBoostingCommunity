import React from 'react';
import './CardPurchaseraid.css';

export const CardPurchaseraid = ({ raid }) => {

    return (
        <tr className='cardPurchaseraidDesign'>
                <td>{raid.idRaid.name !== '' ? raid.idRaid.name : "ID Mythic+ no disponible"}</td>
                <td>{raid.idRaid.price !== '' ? raid.idRaid.price : "ID User no disponible"}g</td>
                <td>{raid.idRaid.pending ? "No" : "Si"}</td>
                <td>{raid.idRaid.claimed ? "No" : "Si"}</td>
                <td>{raid.idRaid.done ? "No" : "Si"}</td>
                <td>{raid.idRaid.claimedby!== '' ? raid.idRaid.claimedby : "Aun sin reclamar"}</td>
        </tr>
    )
}