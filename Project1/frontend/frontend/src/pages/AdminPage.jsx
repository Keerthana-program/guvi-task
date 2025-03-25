import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-yellow-100 p-8">
            <h1 className="text-3xl font-bold">Welcome, Admin</h1>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <button onClick={() => navigate('/upload')} className="bg-red-500 p-8 rounded text-white">
                    Upload Restaurant Info
                </button>
                <button onClick={() => navigate('/reviews')} className="bg-red-500 p-8 rounded text-white">
                    View Reviews
                </button>
                <button onClick={() => navigate('/reservations')} className="bg-red-500 p-8 rounded text-white">
                    View Reservations
                </button>
                <button onClick={() => navigate('/profile')} className="bg-red-500 p-8 rounded text-white">
                    View Profile
                </button>
            </div>
        </div>
    );
}

export default AdminPage;
