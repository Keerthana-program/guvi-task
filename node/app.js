const express = require('express');
const connectDB = require('./config/db'); // Update this path if needed
require('dotenv').config(); // Loads .env file into process.env (only needed locally)

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
