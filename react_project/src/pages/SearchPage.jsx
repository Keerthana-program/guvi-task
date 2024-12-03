import React, { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [queryParams, setQueryParams] = useState({ query: "", type: "" });

  const handleSearch = async (query, type) => {
    setError(null);
    setQueryParams({ query, type });
    try {
      const data = await searchMovies(query, 1, type); 
      if (data.Response === "True") {
        setResults(data.Search);
        setPage(1); 
      } else {
        setError(data.Error);
        setResults([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const fetchPage = async (newPage) => {
    try {
      const data = await searchMovies(queryParams.query, newPage, queryParams.type);
      if (data.Response === "True") {
        setResults(data.Search);
        setPage(newPage);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-blue-500">Movie Buzz</h1>
        <p className="text-gray-600">Find your favorite movies and series</p>
      </div>

      
      <SearchBar onSearch={handleSearch} />

     
      {error && <p className="text-red-500">{error}</p>}

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

    
      <div className="flex justify-center mt-4">
        {page > 1 && (
          <button
            className="bg-gray-300 py-2 px-4 mx-2 rounded"
            onClick={() => fetchPage(page - 1)}
          >
            Previous
          </button>
        )}
        <button
          className="bg-gray-300 py-2 px-4 mx-2 rounded"
          onClick={() => fetchPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
