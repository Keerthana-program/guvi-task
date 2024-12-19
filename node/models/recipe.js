const mongoose = require('mongoose');
const Counter = require('./counter'); // Import the counter model

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Auto-increment logic before saving a recipe
recipeSchema.pre('save', async function(next) {
  const recipe = this;
  
  // If the "id" field is already set, skip increment logic
  if (!recipe.isNew) return next();
  
  try {
    // Increment the counter for "recipeId"
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'recipeId' }, 
      { $inc: { sequenceValue: 1 } }, 
      { new: true, upsert: true }
    );

    recipe.id = counter.sequenceValue; // Set the recipe id
    next();
  } catch (error) {
    next(error);
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
