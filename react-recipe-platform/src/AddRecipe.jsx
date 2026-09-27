import { useState } from "react";
import { useNavigate, Link } from "react-router";

function AddRecipe({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(4);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const generatedId = name.trim().toLowerCase().replace(/\s+/g, "-");

    const newRecipe = {
      id: generatedId,
      name: name.trim(),
      category: "Dinner",
      servings: Number(servings) || 4,
      time: "30 minutes",
      description: description.trim(),
      image: image.trim() || "/images/vegetable-soup.jpg",
      alt: name.trim(),
      ingredients: ["Fresh seasonal ingredients selected by the chef"],
      steps: ["Prepare all ingredients.", "Cook with care and enjoy hot!"],
    };

    onAddRecipe(newRecipe);
    navigate("/");
  }

  return (
    <div className="max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl shadow-md p-6 my-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Recipe Name *
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 p-2.5 rounded-lg focus:outline-none focus:border-slate-900"
            placeholder="e.g., Shiro Wat"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Description *
          </label>
          <textarea
            className="w-full border border-slate-300 p-2.5 rounded-lg focus:outline-none focus:border-slate-900"
            rows="3"
            placeholder="A brief description of this meal..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Image URL (Optional)
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 p-2.5 rounded-lg focus:outline-none focus:border-slate-900"
            placeholder="/images/doro-wat.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Initial Servings
          </label>
          <input
            type="number"
            min="1"
            className="w-full border border-slate-300 p-2.5 rounded-lg focus:outline-none focus:border-slate-900"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="flex-1 bg-slate-900 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-slate-700 transition"
          >
            Save Recipe
          </button>
          <Link
            to="/"
            className="py-2.5 px-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
