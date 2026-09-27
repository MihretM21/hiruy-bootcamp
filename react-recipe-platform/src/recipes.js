// Shared recipe data, used by App.jsx and RecipeDetail.jsx
const recipes = [
  {
    id: "vegetable-soup",
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    description:
      "It is a flavorful broth made by simmering a mix of variety fresh vegetables",
    image: "/images/vegetable-soup.jpg",
    alt: "A warm bowl of fresh vegetable soup garnished with herbs.",
    ingredients: [
      "2 carrots (sliced)",
      "1 onion (diced)",
      "2 potatoes (cubed)",
    ],
    steps: [
      "Heat oil in a pot.",
      "Add vegetables and broth.",
      "Simmer 20 minutes.",
    ],
  },
  {
    id: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    category: "Lunch",
    servings: 2,
    time: "20 minutes",
    description:
      "It is a delicious food which consists of grilled chicken with different spices and vegetables packed in toasted bun.",
    image: "/images/chicken-sandwich.jpg",
    alt: "A freshly grilled chicken sandwich on a toasted bun.",
    ingredients: ["2 chicken breasts", "2 burger buns", "1 tomato (sliced)"],
    steps: [
      "Season and grill the chicken.",
      "Toast the buns.",
      "Assemble the sandwich.",
    ],
  },
  {
    id: "doro-wat",
    name: "Doro wet",
    category: "Dinner",
    servings: 6,
    time: "90 minutes",
    description:
      "It is a popular Ethiopian chicken stew simmered with boiled eggs in a sauce of onions and berbere.",
    image: "/images/doro-wat.jpg",
    alt: "Traditional Ethiopian Doro Wat served with boiled eggs and injera.",
    ingredients: [
      "1 whole chicken",
      "3 onions (chopped)",
      "4 tbsp berbere spice",
    ],
    steps: [
      "Cook onions until soft.",
      "Add berbere and chicken.",
      "Simmer until tender.",
    ],
  },
];

export default recipes;
