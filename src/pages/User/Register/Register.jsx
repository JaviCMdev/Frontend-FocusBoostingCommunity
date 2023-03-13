import React, { useState, useEffect } from 'react';
import { InputText } from '../../../common/InputText/InputText';
import { getServer, postRegister } from '../../../services/apiCalls';
import { errorCheck } from '../../../services/utiles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Register.css';
import { serverData } from '../serverSlice';
import { InputServer } from '../../../common/InputServer/InputServer';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Register = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        password: '',
        email: '',
        battletag: '',
        discord: '',
        server: '',
    })
    const [usuarioError, setUsuarioError] = useState({
        nameError: '',
        passwordError: '',
        emailError: '',
        battletagError: '',
        discordError: '',
    })

    const navigate = useNavigate();
    const registerInputHandler = (e) => {
        setUsuario((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));;
    }

    const registerErrorHandler = (e) => {
        let error = '';
        error = errorCheck(e.target.name, e.target.value);
        setUsuarioError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error
        }));
    }

    const inputServer = (serverid) => {
        setUsuario((prevState) => ({
            ...prevState,
            server: serverid
        }));;
    }

    const signMe = () => {
        postRegister(usuario)
            .then(
                newUser => {
                    console.log(newUser)
                    setTimeout(() => {
                        navigate("/")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }

    // Info Servers
    const [allServer, setAllServer] = useState([]);
    const serverRdx = useSelector(serverData);

    useEffect(() => {
        if (allServer.length === 0) {
            getServer()
                .then(resultado => {
                    setAllServer(resultado.data);
                })
                .catch(error => console.log(error));
        };

    }, [allServer]);

    return (
        <div className="registerDesign">
            <p>Nombre</p>
            <InputText
                type={'text'}
                name={'name'}
                className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'Example'} functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.nameError}</div>
            <p>Contraseña</p>
            <InputText
                type={'password'}
                name={'password'}
                className={usuarioError.passwordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'*****'}
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.passwordError}</div>
            <p>Email</p>
            <InputText
                type={'email'}
                name={'email'}
                className={usuarioError.emailError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'example@example.com'}
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.emailError}</div>
            <p>Battletag</p>
            <InputText
                type={'battletag'}
                name={'battletag'}
                className={usuarioError.battletagError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'Example#1234'}
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.battletagError}</div>
            <p>Discord</p>
            <InputText
                type={'discord'}
                name={'discord'}
                className={usuarioError.discordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={'Example#1234'}
                functionHandler={registerInputHandler}
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.discordError}</div>
            <DropdownButton id="serverbuttonDesign" title="Server">
                <div className='serverBox'>
                {allServer.map(
                    server => {
                        return (
                            <Dropdown.Item onClick={() => inputServer(server._id)}
                                value={server._id}
                                name={'server'}
                                className='serverText'
                                key={server._id}>{server.name}
                            </Dropdown.Item>
                        )
                    }
                )}
                </div>
            </DropdownButton>
            <div className='loginButtonDesign' onClick={() => signMe()}>Sign in</div>
        </div>
    )
};