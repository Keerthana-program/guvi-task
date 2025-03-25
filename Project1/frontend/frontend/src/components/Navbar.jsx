import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-red-500 p-4 flex justify-between">
            <h1 className="text-white text-2xl font-bold">Reserve Your Spot</h1>
            <div>
                <Link to="/" className="text-white px-4">Home</Link>
                <Link to="/register" className="text-white px-4">Register</Link>
                <Link to="/login" className="text-white px-4">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
