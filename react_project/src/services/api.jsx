const API_KEY = "e93ca994"; 
const BASE_URL = "https://www.omdbapi.com/";


// Fetch search results
export const searchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${encodeURIComponent(query)}&page=${page}&type=${type}&apiKey=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

// Fetch movie details
export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}?i=${id}&apiKey=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
