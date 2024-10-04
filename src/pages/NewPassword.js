import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/NewPassword.css';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert('PLas contraseñas no coinciden');
            return;
        }
        alert('Contraseña actualizada correctamente');
        navigate('/');
    };

    return (
        <div className="new-password-container">
            <div className="new-password-box">
                <h2 className="new-password-title">Nueva contraseña</h2>
                <p>Ingresa tu nueva contraseña</p>
                <div className="p-inputgroup flex-1 new-password-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" feedback={false} className="new-password-input" />
                </div>
                <div className="p-inputgroup flex-1 new-password-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repetir contraseña" feedback={false} className="new-password-input" />
                </div>
                <div className="new-password-buttons">
                    <Button label="Cancelar" className="p-button-outlined p-button-secondary" onClick={() => navigate('/login')} />
                    <Button label="Enviar" className="p-button-primary" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default NewPassword;
