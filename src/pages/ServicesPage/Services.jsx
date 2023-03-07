import React, { useState, useEffect } from 'react';
import { CardService } from '../../common/CardService/CardService';
import { serviceData, select } from '../../common/CardService/serviceSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { getServices } from '../../services/apiCalls';
import { all } from 'axios';

export const Services = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        if (allServices.length === 0) {
            getServices()
                .then(resultado => {
                    setAllServices(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allServices]);

    return (
        <div className="serviceDesign">
            <h1>Hola</h1>
            {allServices.map(
                        service => {
                            return (
                                <div onClick={() => Choosen(service)} key={service._id}>
                                    <CardService service={service} />
                                </div>
                            )
                        }
                    )}
        </div>
    )
};

