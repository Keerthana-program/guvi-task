import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();

    return (
        <div className="border p-4 rounded shadow-lg bg-white">
            <img src={restaurant.photos[0]} alt={restaurant.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{restaurant.name}</h2>
            <p className="text-gray-600">{restaurant.location}</p>
            <p>{restaurant.cuisineTypes.join(", ")}</p>
            <button
                onClick={() => navigate(`/restaurant/${restaurant._id}`)}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
            >
                View Details
            </button>
        </div>
    );
}

export default RestaurantCard;
