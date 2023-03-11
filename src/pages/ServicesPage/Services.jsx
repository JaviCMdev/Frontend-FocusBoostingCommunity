import React, { useState, useEffect } from 'react';
import { CardMythicplus } from '../../common/CardMythicplus/CardMythicplus';
import { mythicplusData, selectmythicplus } from '../../common/CardMythicplus/mythicplusSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { getMythicplus, getRaid, getMount, postRentMythicplus } from '../../services/apiCalls';
import { all } from 'axios';
import { CardRaid } from '../../common/CardRaid/CardRaid';
import { raidData, selectraid } from '../../common/CardRaid/raidSlice';
import { CardMount } from '../../common/CardMount/CardMount';
import { mountData, selectmount } from '../../common/CardMount/mountSlice';
import { userData } from '../User/UserSlice';


export const Services = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allMythicplus, setAllMythicplus] = useState([]);
    const [allRaid, setAllRaid] = useState([]);
    const [allMount, setAllMount] = useState([]);
    const detailUsr = useSelector(userData);
    const [msg, setMsg] = useState('');


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

    useEffect(() => {
        if (allMount.length === 0) {
            getMount()
                .then(resultado => {
                    setAllMount(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allMount]);

    const RentMythicplus = (mythicplusid, mythicplusprice) => {
        let body = {
            idMythicplus: mythicplusid,
            idUser: detailUsr.userPass.user,
            price: mythicplusprice
        }
        postRentMythicplus(body, detailUsr.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data)
                setTimeout(() => {
                    navigate('/profile');
                }, 1500);
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <div className="servicesDesign">
            <div className="bannerDesign"><img className="bannerImgDesign" src="https://novaboosting.com/img/1edc4179-e063-4f59-8264-b53d4c17c778/post-1-fw.jpg" alt="BannerMythicplus" /></div>
            <div className="cardsDesign">
                {allMythicplus.map(
                    mythicplus => {
                        return (
                            <div className='cardDesign' key={mythicplus._id}>
                                <CardMythicplus mythicplus={mythicplus} />
                                {detailUsr.userPass.token !== '' &&
                                    <div onClick={() => RentMythicplus(mythicplus._id, mythicplus.price)} className='rentDesign'>Comprar</div>
                                }
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
                            <div className='cardDesign' onClick={() => Choosen(raid)} key={raid._id}>
                                <CardRaid raid={raid} />
                                {detailUsr.userPass.token !== '' &&
                                    <div onClick={() => RentMe()} className='rentDesign'>Comprar</div>
                                }
                            </div>
                        )
                    }
                )}
            </div>
            <div className="bannerDesign"><img className="bannerImgDesign" src="https://novaboosting.com/img/c632593d-0499-4716-9b62-465e3a248ef4/post-7-fw.jpg" alt="BannerMount" /></div>
            <div className="cardsDesign">
                {allMount.map(
                    mount => {
                        return (
                            <div className='cardDesign' onClick={() => Choosen(mount)} key={mount._id}>
                                <CardMount mount={mount} />
                                {detailUsr.userPass.token !== '' &&
                                    <div onClick={() => RentMe()} className='rentDesign'>Comprar</div>
                                }
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
};

