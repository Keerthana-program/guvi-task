const Recipe = require('../models/recipe');

// @desc    Create a new recipe
// @route   POST /api/recipes
// @access  Public
const createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, cookingTime } = req.body;
        const newRecipe = await Recipe.create({ title, ingredients, instructions, cookingTime });
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
const getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findOne({ id: req.params.id }); // Use "id" instead of "_id"
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// @desc    Update a recipe by ID
// @route   PUT /api/recipes/:id
// @access  Public
const updateRecipe = async (req, res) => {
    try {
      const id = req.params.id; // Get the ID from the request parameters
      const updatedData = req.body; // Get the updated data from the request body
  
      // Find the recipe by the custom ID (not _id) and update it
      const updatedRecipe = await Recipe.findOneAndUpdate(
        { id: id }, // Find the recipe with matching id
        updatedData, // Update with the new data from the request
        { new: true } // Return the updated recipe
      );
  
      if (!updatedRecipe) {
        return res.status(404).json({ message: `Recipe with ID ${id} not found` });
      }
  
      res.status(200).json({
        message: `Recipe with ID ${id} successfully updated`,
        recipe: updatedRecipe
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// @desc    Delete a recipe by ID
// @route   DELETE /api/recipes/:id
// @access  Public
const deleteRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findOneAndDelete({ id: req.params.id }); // Use "id" instead of "_id"
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json({ message: `Recipe with ID ${req.params.id} has been deleted` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};
