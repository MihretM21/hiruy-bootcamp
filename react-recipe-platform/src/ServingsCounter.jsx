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
    <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm px-4 py-3 w-fit mb-6">
      <p className="font-semibold text-slate-900">Servings: {servings}</p>
      <button
        onClick={decrease}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 text-white font-bold hover:bg-slate-700 transition-colors"
      >
        -
      </button>
      <button
        onClick={increase}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-pink-500 text-white font-bold hover:bg-pink-600 transition-colors"
      >
        +
      </button>
    </div>
  );
}

export default ServingsCounter;
