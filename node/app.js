const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes'); // Correct path to the route file

app.use(express.json());

// Use the routes for all recipe-related endpoints
app.use('/api/recipes', recipeRoutes);

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
