import { useParams, Link } from "react-router";
import ServingsCounter from "./ServingsCounter";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  // Finds recipe matching string id (e.g. "vegetable-soup", "doro-wat")
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Recipe Not Found</h2>
        <Link to="/" className="text-slate-700 font-semibold underline">
          ← Back to all recipes
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-md p-6 my-6">
      <Link to="/" className="inline-block mb-4 text-slate-600 font-semibold hover:text-slate-900">
        ← Back to Recipes
      </Link>

      <img
        src={recipe.image}
        alt={recipe.alt}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-slate-900">{recipe.name}</h2>
        <span className="text-sm font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
          {recipe.time}
        </span>
      </div>

      <p className="text-slate-600 mb-6">{recipe.description}</p>

      {/* Interactive Servings Counter */}
      <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <ServingsCounter initialServings={recipe.servings || 4} />
      </div>

      {recipe.ingredients && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ingredients</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.steps && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Cooking Steps</h3>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2">
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

export default RecipeDetail;
