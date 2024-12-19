const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import routes
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api', recipeRoutes);

// Default route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Recipe API!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
