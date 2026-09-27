import { useState } from "react";

function AddRecipeForm({ onCancel }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [servings, setServings] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, category, ingredients, steps, servings });
    alert("Recipe submitted! (Check the console — saving to a real list is a future step.)");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 max-w-xl">
      <h2 className="text-2xl font-bold text-slate-900">Add a New Recipe</h2>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Recipe Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
          <option>Snack</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">Servings</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>

      <div className="flex gap-4">
        <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg">
          Submit Recipe
        </button>
        <button type="button" onClick={onCancel} className="text-slate-600 hover:text-slate-900 font-semibold">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddRecipeForm;
