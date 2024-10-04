import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ForgotPassword.css';
import { Toast } from 'primereact/toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleSubmit = () => {
        toast.current.show({ 
            severity: 'success', 
            summary: 'Correo enviado', 
            detail: `Se ha enviado un correo a ${email}`, 
            life: 2000 
        });        
        navigate('/new-password');
    };

    return (
        <div className="forgot-password-container">
            <Toast ref={toast} />
            <div className="forgot-password-box">
                <h2 className="forgot-password-title">Recuperar Contraseña</h2>
                <p>Ingresa tu correo para recuperar tu contraseña</p>
                <div className="p-inputgroup flex-1 forgot-password-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" className="forgot-password-input" />
                </div>
                <div className="forgot-password-buttons">
                    <Button label="Cancelar" className="p-button-outlined p-button-secondary" onClick={() => navigate('/login')} />
                    <Button label="Enviar" className="p-button-primary" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
