import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
