import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';


// language=en-US&page=1 => query parameters
// cart/2/ => body parameters is 2

/*

useLocation is  a React Router hook that returns  the current location object.
The location object contains information about the current URL and how the current route was reached.


*/

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const SearchedMoviePage = () => {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery().get('query');



  return (
    <div>SearchedMoviePage</div>
  )
}

export default SearchedMoviePage