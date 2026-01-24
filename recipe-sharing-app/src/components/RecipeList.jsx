import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom"; // Import Link

const RecipeList = () => {
  // Use filteredRecipes to ensure search functionality works
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const isFavorite = useRecipeStore((state) =>
    state.favorites.includes(recipeId),
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

const handleFavoriteToggle = () => {
  if (isFavorite) {
    removeFavorite(recipeId);
  } else {
    addFavorite(recipeId);
  }
};

<button onClick={handleFavoriteToggle}>
  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
</button>

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px",a
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add the Link component here */}
            <Link
              to={`/recipe/${recipe.id}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
