import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],

  // Action to compute filtered results
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(state.searchTerm.toLowerCase()),
          ),
      ),
    })),

  // Helper to initialize or update recipes
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
}));
export { useRecipeStore };
