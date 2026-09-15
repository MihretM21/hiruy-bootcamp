import Header from "./Header";
import RecipeCard from "./RecipeCard";
import Footer from "./Footer";
import "./style.css";
import ServingsCounter from "./ServingsCounter";

const recipes = [
  {
    name: "Vegetable Soup",
    description:
      "It is a flavorful broth made by simmering a mix of variety fresh vegetables",
    image: "/images/vegetable-soup.jpg",
    alt: "A warm bowl of fresh vegetable soup garnished with herbs.",
  },
  {
    name: "Grilled Chicken Sandwich",
    description:
      "It is a delicious food which consists of grilled chicken with different spices and vegetables packed in toasted bun.",
    image: "/images/chicken-sandwich.jpg",
    alt: "A freshly grilled chicken sandwich on a toasted bun.",
  },
  {
    name: "Doro wet",
    description:
      "It is a popular Ethiopian chicken stew simmered with boiled eggs in a sauce of onions and berbere.",
    image: "/images/doro-wat.jpg",
    alt: "Traditional Ethiopian Doro Wat served with boiled eggs and injera.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <main className="recipe-grid">
        <h2>Recipes</h2>
        <ServingsCounter initialServings={4} />

        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            description={recipe.description}
            image={recipe.image}
            alt={recipe.alt}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
