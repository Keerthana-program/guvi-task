import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await authService.login({ email, password });
        if (res.token) {
            localStorage.setItem('token', res.token);
            navigate(res.type === 'admin' ? '/admin' : '/user');
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
            <h1 className="text-3xl mb-6">Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-red-500 px-6 py-2 text-white mt-4" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
