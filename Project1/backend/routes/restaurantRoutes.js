const express = require('express');
const { getRestaurants, addRestaurant, getRestaurantById } = require('../controllers/restaurantController.js');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getRestaurants).post(protect, addRestaurant);
router.route('/:id').get(getRestaurantById);

module.exports = router;
