const Restaurant = require('../models/Restaurant');

// Get all restaurants
exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a restaurant (Admin only)
exports.addRestaurant = async (req, res) => {
    const { name, menu, location, hours, cuisine, priceRange, features, images } = req.body;

    try {
        const restaurant = new Restaurant({
            admin: req.user._id,
            name,
            menu,
            location,
            hours,
            cuisine,
            priceRange,
            features,
            images
        });

        const createdRestaurant = await restaurant.save();
        res.status(201).json(createdRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Unable to add restaurant' });
    }
};

// Get restaurant by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (restaurant) {
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
