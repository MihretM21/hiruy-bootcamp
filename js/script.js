const recipes = [
  {
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    ingredients: ["2 carrots(sliced)", "1 onion(diced)", "2 potatoes(cubed)"],
    steps: [
      "Heatoil inapot.",
      "Add vegetables and broth.",
      "Simmer 20 minutes.",
    ],
  },

  {
    name: "Grilled Chicken Sandwich",
    category: "Lunch",
    servings: 2,
    time: "20 minutes",
    ingredients: ["2chicken breasts", "2 burger buns", "1 tomato(sliced)"],
    steps: [
      "Season and grill the chicken.",
      "Toast the buns.",
      "Assemble the sandwich.",
    ],
  },

  {
    name: "DoroWat",
    category: "Dinner",
    servings: 6,
    time: "90 minutes",
    ingredients: [
      "1whole chicken",
      "3 onions(chopped)",
      "4 tbsp berbere spice",
    ],
    steps: [
      "Cook onions until soft.",
      "Add berbere and chicken.",
      "Simmer until tender.",
    ],
  },
];
console.log(recipes);
console.log(recipes[0].name);
console.log(recipes.length);

function isValidServings(servings) {
  if (servings <= 0) {
    return false;
  }
  return true;
}
console.log(isValidServings(4)); //true
console.log(isValidServings(0)); //false
console.log(isValidServings(-2)); //false

for (let i = 0; i < recipes.length; i++) {
  console.log(recipes[i].name);
}

for (let i = 0; i < recipes.length; i++) {
  console.log(`${i + 1}. ${recipes[i].name} (${recipes[i].category})`);
}

function calculateScaledIngredient(
  originalAmount,
  originalServings,
  newServings,
) {
  const ratio = newServings / originalServings;
  const scaledAmount = originalAmount * ratio;
  return scaledAmount;
}
console.log(calculateScaledIngredient(2, 4, 8)); //4
console.log(calculateScaledIngredient(2, 4, 2)); //1
console.log(calculateScaledIngredient(3, 2, 5)); //7.5
const soup = recipes[0];
console.log(soup.name, "originally serves", soup.servings);
console.log(
  "Scaled to 8 servings,an ingredient originally at 2 units becomes:",
  calculateScaledIngredient(2, soup.servings, 8),
);

function searchRecipes(keyword, recipesArray) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();

  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name.toLowerCase().includes(lowerKeyword)) {
      results.push(recipesArray[i]);
    }
  }
  return results;
}

console.log(searchRecipes("soup", recipes));
//[{name:"Vegetable Soup", ...}]
console.log(searchRecipes("chick", recipes));
//[{name:"Grilled Chicken Sandwich", ...}]—partial match
console.log(searchRecipes("pizza", recipes));
//[]—no results,and that's correct,not an error

console.log(searchRecipes("SOUP", recipes));
// should still match "Vegetable Soup"

//Scales a single ingredient amount from its original servings to a new servings count.
// Returns null and logs a message if newServings is zero or negative.

function calculateScaledIngredient(
  originalAmount,
  originalServings,
  newServings,
) {
  if (newServings <= 0) {
    console.log("Servings must be greater than zero.");
    return null;
  }
  const ratio = newServings / originalServings;
  return originalAmount * ratio;
}

//function calculateScaledIngredient(originalAmount, originalServings, newServings) { ... }
// Returns all recipes whose name contains the given keyword (case-insensitive).
// Returns the full array unchanged if the keyword is empty.

function searchRecipes(keyword, recipesArray) {
  if (keyword.trim() === "") {
    return recipesArray;
  }
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name.toLowerCase().includes(lowerKeyword)) {
      results.push(recipesArray[i]);
    }
  }
  return results;
}
