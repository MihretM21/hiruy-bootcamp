import { useState } from "react";

function RecipeCard({ name, description, image, alt, onView }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-1">{description}</p>
        <button
          onClick={onView}
          className="w-full py-2 mb-2 rounded-lg font-semibold bg-pink-600 text-white hover:bg-pink-700 transition-colors"
        >
          View Recipe
        </button>
        <button
          onClick={toggleFavorite}
          className={w-full py-2 rounded-lg font-semibold transition-colors ${
            isFavorite
              ? "bg-slate-900 text-white hover:bg-slate-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }}
        >
          {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
