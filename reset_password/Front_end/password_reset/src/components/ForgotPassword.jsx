import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/forgot-password', { email });
            setMessage('Password reset link sent');
        } catch (error) {
            setMessage('Email not found');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <EmailInput value={email} setValue={setEmail} />
                <button type="submit" className="btn btn-warning">Send Reset Link</button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default ForgotPassword;
