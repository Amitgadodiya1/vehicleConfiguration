const SearchBar = ({ searchTerm, onChange }) => (
    <input
      type="text"
      placeholder="Search models, variants, accessories..."
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 transition"
    />
  );
  
  export default SearchBar;
  