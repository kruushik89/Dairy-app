import React from 'react';
import './LeftBar.css';
import HTag from "../HTag/HTag";

const LeftBar = () => {
    return (
        <div className={'left-bar'}>
            <HTag tag={'h2'} cls={'left-bar__title'}>Dairy app</HTag>
            <p className={'left-bar__text'}>Comment with no sense</p>
        </div>
    )
}

export default LeftBar;