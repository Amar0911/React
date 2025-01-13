import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './HomePage.css'; 

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="homepage">
      <h2 className="homepage-title">🎬 Popular Movies</h2>
      <div className="display-flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
