import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, type);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full max-w-md mb-2"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full max-w-md mb-2"
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
