require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the User Authentication and Authorization API!\n\nAvailable Routes:\n- POST /api/auth/register\n- POST /api/auth/login\n- GET /api/auth/profile (Protected)');
});

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
