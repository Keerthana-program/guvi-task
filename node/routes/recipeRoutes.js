const express = require('express');
const router = express.Router();
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

// Routes
router.post('/recipes', createRecipe); // Create recipe
router.get('/recipes', getAllRecipes); // Get all recipes
router.get('/recipes/:id', getRecipeById); // Get recipe by ID
router.put('/recipes/:id', updateRecipe); // Update recipe by ID
router.delete('/recipes/:id', deleteRecipe); // Delete recipe by ID

module.exports = router;
