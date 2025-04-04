import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login({onLogin }: {onLogin: () => void}){
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, {replace: true});
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;