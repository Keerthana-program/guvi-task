import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieCard = ({ movie }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const details = await getMovieDetails(movie.imdbID);
        if (details && details.imdbRating !== "N/A") {
          setRating(details.imdbRating);
        }
      } catch (error) {
        console.error("Error fetching movie rating:", error);
      }
    };
    fetchRating();
  }, [movie.imdbID]);

  return (
    <div className="border rounded p-2">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-2"
      />
      <h2 className="text-lg font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
      {rating && <p className="text-yellow-500 font-bold">⭐ {rating}</p>}
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-blue-500 hover:underline"
      >
        More Info
      </Link>
    </div>
  );
};

export default MovieCard;
