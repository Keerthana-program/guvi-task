import React, { useState, useEffect } from 'react';
import restaurantService from '../services/restaurantService';
import RestaurantCard from '../components/RestaurantCard';
import Filters from '../components/Filters';

function UserPage() {
    const [restaurants, setRestaurants] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        restaurantService.getRestaurants().then((res) => setRestaurants(res));
    }, []);

    return (
        <div className="min-h-screen p-8 bg-yellow-50">
            <h1 className="text-3xl font-bold">Find Your Spot</h1>
            <Filters setFilters={setFilters} />
            <div className="grid grid-cols-3 gap-8 mt-8">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                ))}
        </div>
        </div>
    );
}

export default UserPage;
