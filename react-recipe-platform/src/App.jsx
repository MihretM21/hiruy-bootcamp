import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";
import AddRecipe from "./AddRecipe";
import initialRecipes from "./recipes";

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  function handleAddRecipe(newRecipe) {
    setRecipes([newRecipe, ...recipes]);
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      <div>
        <Header />

        <main className="max-w-6xl mx-auto px-6 py-8">
          <Routes>
            {/* 1. Home / All Recipes Route */}
            <Route
              path="/"
              element={
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Recipes</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        description={recipe.description}
                        image={recipe.image}
                        alt={recipe.alt}
                      />
                    ))}
                  </div>
                </div>
              }
            />

            {/* 2. Recipe Detail Route */}
            <Route
              path="/recipe/:id"
              element={<RecipeDetail recipes={recipes} />}
            />

            {/* 3. Add Recipe Form Route */}
            <Route
              path="/add-recipe"
              element={<AddRecipe onAddRecipe={handleAddRecipe} />}
            />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
