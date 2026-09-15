import { useState } from "react";

function ServingsCounter({ initialServings }) {
  const [servings, setServings] = useState(initialServings);

  function increase() {
    setServings(servings + 1);
  }

  function decrease() {
    if (servings > 1) {
      setServings(servings - 1);
    }
  }

  return (
    <div>
      <p>Servings: {servings}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default ServingsCounter;
