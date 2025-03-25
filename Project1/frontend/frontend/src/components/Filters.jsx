import React from 'react';

function Filters({ setFilters }) {
    const handleFilterChange = (e) => {
        setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex gap-4 bg-yellow-100 p-4">
            <select name="cuisine" onChange={handleFilterChange} className="p-2">
                <option value="">All Cuisines</option>
                <option value="italian">Italian</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
            </select>

            <select name="price" onChange={handleFilterChange} className="p-2">
                <option value="">All Prices</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <select name="features" onChange={handleFilterChange} className="p-2">
                <option value="">Any Feature</option>
                <option value="outdoor">Outdoor Seating</option>
                <option value="music">Live Music</option>
                <option value="family">Family Friendly</option>
            </select>
        </div>
    );
}

export default Filters;
