import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&langauge=en-US`);
      const data = await res.json();
      setMovie(data);
      console.log(data);
    }
  
    fetchMovies();
  }, [id])
  


  return (
    <div className="movie-details">
      <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default MovieDetails