function Header({ onHomeClick, onAddRecipeClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-slate-900">Hiruy Recipe Platform</h1>
      <nav className="flex gap-6">
        <button onClick={onHomeClick} className="text-slate-600 hover:text-slate-900 transition-colors">
          Home
        </button>
        <button onClick={onAddRecipeClick} className="text-slate-600 hover:text-slate-900 transition-colors">
          Add Recipe
        </button>
      </nav>
    </header>
  );
}

export default Header;
