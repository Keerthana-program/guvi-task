import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie details.");
      }
    };
    fetchDetails();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
          alt={movie.Title}
          className="w-full md:w-1/3 object-cover mb-4"
        />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p className="text-yellow-500 font-bold">
            <strong>⭐ IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
