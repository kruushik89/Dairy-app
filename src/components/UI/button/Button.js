import React from 'react';
import './Button.css';

const Button = ({children, cls, click}) => {
    return (
        <button onClick={click} className={`btn ${cls}`}>{children}</button>
    )
}

export default Button;