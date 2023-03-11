import React from 'react';
import './CardPurchasemount.css';

export const CardPurchasemount = ({ mount }) => {

    return (
        <tr className='cardPurchasemountDesign'>
                <td>{mount.idMount.name !== '' ? mount.idMount.name : "ID Mythic+ no disponible"}</td>
                <td>{mount.idMount.price !== '' ? mount.idMount.price : "ID User no disponible"}g</td>
                <td>{mount.idMount.pending ? "No" : "Si"}</td>
                <td>{mount.idMount.claimed ? "No" : "Si"}</td>
                <td>{mount.idMount.done ? "No" : "Si"}</td>
                <td>{mount.idMount.claimedby!== '' ? mount.idMount.claimedby : "Aun sin reclamar"}</td>
        </tr>
    )
}