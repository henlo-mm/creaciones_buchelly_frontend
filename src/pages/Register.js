import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        alert('Usuario registrado correctamente');
        navigate('/');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Registro</h2>
                <div className="p-inputgroup flex-1 register-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" className="register-input" />
                </div>
                <div className="p-inputgroup flex-1 register-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" className="register-input" />
                </div>
                <div className="p-inputgroup flex-1 register-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" feedback={false} className="register-input" />
                </div>
              {/*   <div className="register-terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="register-terms-label">He leído los <a href="#">Términos y Condiciones</a></label>
                </div> */}
                <Button label="Registrarse" icon="pi pi-user-plus" onClick={handleRegister} className="register-button" />
                <p className="register-login-link">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
