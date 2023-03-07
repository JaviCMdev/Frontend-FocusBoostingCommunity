import React from 'react';
import Banner from './Focus-Horizontal.png';
import './Home.css';


export const Home = () => {

    return (
        <div className="homeDesign">
            <div className="homeBanner"><img className="bannerHome" src={Banner} alt="Banner" /></div>
            <div className="textBox">
                <h2>Bienvenido a "Focus Boosting Community"</h2>
                <h4>El proposito de nuestra pagina web es la venta de diversos servicios como son por ejemplo "Mythic+", "Raids" y "Monturas" para el videojuego "World of Warcraft".</h4>
            </div>
            <div className="textBox">
                <h2>¿Como funcionan nuestros servicios?</h2>
                <h4>Una vez adquieras un servicio, un miembro de nuestro staff se pondra en contacto contigo via Discord para realizar el pago Ingame, una vez realizado dicho pago, se agendara cuando sera la fecha del servicio adquirido, el intervalo varia entre el mismo momento del pago o unos dias, dependiendo del servicio adquirido.</h4>
            </div>
            <div className="textBox">
                <h2>Servicios disponibles</h2>
                <h4>Miticas+, desde el nivel 0 al nivel +20.</h4>
                <h4>Raids, por el momento solo "Camara de las Incarnaciones".</h4>
                <h4>Monturas, catalogo diverso de las monturas mas raras y dificiles de conseguir.</h4>
            </div>
        </div>
    )
};