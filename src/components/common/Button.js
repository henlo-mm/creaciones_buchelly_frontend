import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

const Button = ({ label, onClick }) => {
    return <PrimeButton label={label} onClick={onClick} />;
};

export default Button;
