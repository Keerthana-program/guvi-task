const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        },
        date: { type: String, required: true },
        time: { type: String, required: true },
        seats: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);
