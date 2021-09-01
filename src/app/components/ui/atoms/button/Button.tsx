import React from 'react';
import { Buttons } from './Button.style';

type BUTTON = {
    size?: string;
    color?: string;
}
const Button: React.FC<BUTTON> = ({ size, color}) => {
    return (
        <Buttons />
    )
}

export default Button
