import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { token } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/auth/reset-password/${token}`, { password });
            setMessage('Password updated successfully');
        } catch (error) {
            setMessage('Invalid or expired token');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Reset Password</button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default ResetPassword;
