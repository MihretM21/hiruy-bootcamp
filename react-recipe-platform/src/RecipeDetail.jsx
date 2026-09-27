function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <button
        onClick={onBack}
        className="text-slate-600 hover:text-slate-900 mb-4 font-semibold"
      >
        ← Back to Recipes
      </button>

      <img src={recipe.image} alt={recipe.alt} className="w-full h-64 object-cover rounded-lg mb-6" />

      <h2 className="text-2xl font-bold text-slate-900 mb-2">{recipe.name}</h2>
      <p className="text-slate-600 mb-6">{recipe.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Ingredients</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Preparation Steps</h3>
          <ol className="list-decimal list-inside text-slate-700 space-y-1">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <table className="mt-6 border-collapse">
        <tbody>
          <tr>
            <th className="text-left text-slate-900 pr-6 py-1">Category</th>
            <th className="text-left text-slate-900 pr-6 py-1">Servings</th>
            <th className="text-left text-slate-900 py-1">Prep Time</th>
          </tr>
          <tr>
            <td className="pr-6 py-1 text-slate-700">{recipe.category}</td>
            <td className="pr-6 py-1 text-slate-700">{recipe.servings}</td>
            <td className="py-1 text-slate-700">{recipe.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeDetail;
