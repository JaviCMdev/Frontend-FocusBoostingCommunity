import React, { useState, useEffect } from 'react';
import { CardMythicplus } from '../../common/CardMythicplus/CardMythicplus';
import { mythicplusData, selectmythicplus } from '../../common/CardMythicplus/mythicplusSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { getMythicplus, getRaid } from '../../services/apiCalls';
import { all } from 'axios';
import { CardRaid } from '../../common/CardRaid/CardRaid';
import { raidData, selectraid } from '../../common/CardRaid/raidSlice';




export const Services = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allMythicplus, setAllMythicplus] = useState([]);
    const [allRaid, setAllRaid] = useState([]);


    useEffect(() => {
        if (allMythicplus.length === 0) {
            getMythicplus()
                .then(resultado => {
                    setAllMythicplus(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allMythicplus]);

    useEffect(() => {
        if (allRaid.length === 0) {
            getRaid()
                .then(resultado => {
                    setAllRaid(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allRaid]);

    return (
        <div className="servicesDesign">
            <div className="bannerDesign"><img className="bannerImgDesign" src="https://novaboosting.com/img/1edc4179-e063-4f59-8264-b53d4c17c778/post-1-fw.jpg" alt="BannerMythicplus" /></div>
            <div className="cardsDesign">
                {allMythicplus.map(
                    mythicplus => {
                        return (
                            <div onClick={() => Choosen(mythicplus)} key={mythicplus._id}>
                                <CardMythicplus mythicplus={mythicplus} />
                            </div>
                        )
                    }
                )}
            </div>
            <div className="bannerDesign"><img className="bannerImgDesign" src="https://media.discordapp.net/attachments/750788845561446533/862122477961347072/raids.png" alt="BannerRaid" /></div>
            <div className="cardsDesign">
                {allRaid.map(
                    raid => {
                        return (
                            <div onClick={() => Choosen(raid)} key={raid._id}>
                                <CardRaid raid={raid} />
                            </div>
                        )
                    }
                )}
            </div>
            <div className="bannerDesign"><img className="bannerImgDesign" src="https://novaboosting.com/img/c632593d-0499-4716-9b62-465e3a248ef4/post-7-fw.jpg" alt="BannerMount" /></div>
        </div>
    )
};

