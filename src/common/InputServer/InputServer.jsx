import React from 'react';
import './InputServer.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export const InputServer = ({id, name}) => {
    return (
        <Dropdown.Item value={id}>{name}</Dropdown.Item>
    )
}