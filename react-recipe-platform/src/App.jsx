import { useState } from "react";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";
import AddRecipeForm from "./AddRecipeForm";
import Footer from "./Footer";
import ServingsCounter from "./ServingsCounter";

const recipes = [
  {
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    description: "It is a flavorful broth made by simmering a mix of variety fresh vegetables",
    image: "/images/vegetable-soup.jpg",
    alt: "A warm bowl of fresh vegetable soup garnished with herbs.",
    ingredients: ["2 carrots (sliced)", "1 onion (diced)", "2 potatoes (cubed)"],
    steps: ["Heat oil in a pot.", "Add vegetables and broth.", "Simmer 20 minutes."],
  },
  {
    name: "Grilled Chicken Sandwich",
    category: "Lunch",
    servings: 2,
    time: "20 minutes",
    description: "It is a delicious food which consists of grilled chicken with different spices and vegetables packed in toasted bun.",
    image: "/images/chicken-sandwich.jpg",
    alt: "A freshly grilled chicken sandwich on a toasted bun.",
    ingredients: ["2 chicken breasts", "2 burger buns", "1 tomato (sliced)"],
    steps: ["Season and grill the chicken.", "Toast the buns.", "Assemble the sandwich."],
  },
  {
    name: "Doro wet",
    category: "Dinner",
    servings: 6,
    time: "90 minutes",
    description: "It is a popular Ethiopian chicken stew simmered with boiled eggs in a sauce of onions and berbere.",
    image: "/images/doro-wat.jpg",
    alt: "Traditional Ethiopian Doro Wat served with boiled eggs and injera.",
    ingredients: ["1 whole chicken", "3 onions (chopped)", "4 tbsp berbere spice"],
    steps: ["Cook onions until soft.", "Add berbere and chicken.", "Simmer until tender."],
  },
];

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function openRecipe(recipe) {
    setSelectedRecipe(recipe);
    setCurrentView("detail");
  }

  function goHome() {
    setCurrentView("home");
    setSelectedRecipe(null);
  }

  function openAddRecipeForm() {
    setCurrentView("add");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onHomeClick={goHome} onAddRecipeClick={openAddRecipeForm} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {currentView === "home" && (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Recipes</h2>
            <ServingsCounter initialServings={4} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  name={recipe.name}
                  description={recipe.description}
                  image={recipe.image}
                  alt={recipe.alt}
                  onView={() => openRecipe(recipe)}
                />
              ))}
            </div>
          </>
        )}

        {currentView === "detail" && selectedRecipe && (
          <RecipeDetail recipe={selectedRecipe} onBack={goHome} />
        )}

        {currentView === "add" && <AddRecipeForm onCancel={goHome} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
