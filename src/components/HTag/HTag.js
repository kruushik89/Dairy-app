import React from 'react';
import './HTag.css';

const HTag = ({tag, children, cls = ''}) => {
    switch (tag) {
        case 'h1':
            return <h1 className={'h_tag ' + cls}>{children}</h1>
        case 'h2':
            return <h2 className={'h_tag ' + cls}>{children}</h2>
        case 'h3':
            return <h3 className={'h_tag ' + cls}>{children}</h3>
        case 'h4':
            return <h3 className={'h_tag ' + cls}>{children}</h3>
        default:
            return <></>
    }
}

export default HTag; 