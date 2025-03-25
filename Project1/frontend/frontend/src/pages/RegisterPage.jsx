import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user');
    const [restaurantName, setRestaurantName] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const userData = {
                username,
                email,
                password,
                userType,
                ...(userType === 'admin' && { restaurantName, secretKey })
            };

            const response = await authService.register(userData);
            alert(response.message || 'Registration successful');
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
            <h1 className="text-3xl font-bold mb-6">Register</h1>

            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded"
                    />

                    <div className="flex gap-4 items-center">
                        <label>User Type:</label>
                        <div>
                            <input
                                type="radio"
                                name="userType"
                                value="user"
                                checked={userType === 'user'}
                                onChange={() => setUserType('user')}
                            /> User
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="userType"
                                value="admin"
                                checked={userType === 'admin'}
                                onChange={() => setUserType('admin')}
                            /> Admin
                        </div>
                    </div>

                    {userType === 'admin' && (
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                value={restaurantName}
                                onChange={(e) => setRestaurantName(e.target.value)}
                                className="p-2 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Secret Key"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                className="p-2 border rounded"
                            />
                        </div>
                    )}

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        onClick={handleRegister}
                        className="bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600"
                    >
                        Register
                    </button>

                    <button
                        onClick={() => navigate('/login')}
                        className="text-blue-500 mt-4"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
