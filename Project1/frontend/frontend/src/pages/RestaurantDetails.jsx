import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
    const { id } = useParams();

    // Fetch restaurant details based on ID (mock data below)
    const restaurant = {
        name: "Pasta Palace",
        menu: [{ name: "Spaghetti", price: 15 }, { name: "Lasagna", price: 20 }],
        photos: ["/img/pasta.jpg"],
        rating: 4.5,
        location: "Downtown",
    };

    return (
        <div className="p-8">
            <h1 className="text-4xl">{restaurant.name}</h1>
            <p>{restaurant.location}</p>
            <p>⭐ {restaurant.rating}</p>
        </div>
    );
}

export default RestaurantDetails;
