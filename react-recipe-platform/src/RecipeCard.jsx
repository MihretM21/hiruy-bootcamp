// src/RecipeCard.jsx
import { useState } from "react";

function RecipeCard({ name, description, image, alt }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="recipe-card">
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>

      
      <button onClick={toggleFavorite}>
        {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>
    </article>
  );
}

export default RecipeCard;
