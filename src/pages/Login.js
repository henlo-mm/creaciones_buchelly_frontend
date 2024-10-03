import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'admin' && password === 'admin') {
            navigate('/home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Iniciar sesión</h2>
               
                <div className="p-inputgroup flex-1 login-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Usuario" className="login-input" />
                </div>
                <div className="p-inputgroup flex-1 login-field">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" feedback={false} className="login-input" />
                </div>
                
                <div className="login-options">
                    <div className="login-remember">
                        <InputText type="checkbox" id="remember" />
                        <label htmlFor="remember" className="login-remember-label">Recordarme</label>
                    </div>
                    <a href="#" className="login-reset">Recuperar contraseña</a>
                </div>
                <Button label="Ingresar" icon="pi pi-sign-in" onClick={handleLogin} className="login-button" />
            </div>
        </div>
    );
};

export default Login;
