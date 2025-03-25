const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema(
    {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: { type: String, required: true },
        menu: { type: Array, required: true },
        location: { type: String, required: true },
        hours: { type: String, required: true },
        cuisine: { type: String, required: true },
        priceRange: { type: String, required: true },
        features: { type: Array },
        images: { type: Array }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
