import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  // Action to add a recipe ID to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  // Action to remove a recipe ID from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [],
  // Logic to suggest recipes (e.g., if a user favorites a recipe, suggest others)
  generateRecommendations: () =>
    set((state) => {
      // Simple logic: recommend recipes that are NOT in favorites but match a "vibe"
      // Here we use a random filter as a mock algorithm
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5,
      );
      return { recommendations: recommended };
    }),
}));
export default { useRecipeStore };
