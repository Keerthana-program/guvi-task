const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { makeReservation } = require('../controllers/reservationController');
const router = express.Router();

// POST reservation (User)
router.post('/', protect, makeReservation);

module.exports = router;
