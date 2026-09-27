import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide hover:opacity-90">
          🍲 Hiruy Recipe Platform
        </Link>
        <nav className="flex gap-4 items-center">
          <Link to="/" className="text-slate-200 hover:text-white font-medium text-sm">
            Recipes
          </Link>
          <Link
            to="/add-recipe"
            className="bg-white text-slate-900 px-3 py-1.5 rounded-lg font-bold hover:bg-slate-100 transition text-sm shadow-sm"
          >
            + Add Recipe
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
