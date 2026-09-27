import { useState } from "react";
import { Link } from "react-router";

function RecipeCard({ id, name, description, image, alt }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
      <Link to={`/recipe/${id}`} className="block">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-1 hover:text-slate-700">
          <Link to={`/recipe/${id}`}>{name}</Link>
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-1">{description}</p>

        {/* Your Exact Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`w-full py-2 rounded-lg font-semibold transition ${
            isFavorite
              ? "bg-slate-900 text-white hover:bg-slate-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {isFavorite ? "💖 Favorited" : "🤍 Add to Favorites"}
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
