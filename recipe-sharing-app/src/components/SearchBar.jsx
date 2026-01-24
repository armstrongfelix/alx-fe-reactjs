import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Re-run the filter whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or ingredients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
