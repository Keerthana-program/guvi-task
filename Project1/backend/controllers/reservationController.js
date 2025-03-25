const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant');

// Make a reservation
makeReservation = async (req, res) => {
    const { restaurantId, date, time, seats } = req.body;

    try {
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Check for existing reservations on the same date/time
        const existingReservations = await Reservation.find({ restaurant: restaurantId, date, time });
        const reservedSeats = existingReservations.reduce((total, res) => total + res.seats, 0);

        // Ensure there are enough seats available
        if (reservedSeats + seats > 10) {
            return res.status(400).json({ message: 'Not enough seats available' });
        }

        // Create the reservation
        const reservation = new Reservation({
            user: req.user._id,
            restaurant: restaurantId,
            date,
            time,
            seats
        });

        const createdReservation = await reservation.save();
        res.status(201).json(createdReservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating reservation' });
    }
};

// Export the function
module.exports = {
    makeReservation
};
