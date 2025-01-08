import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Navrbar = () => {
  const [query,setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
      navigate(`/search?query=${query}`);
      setQuery("");
    }
  }

  return (
    <nav>
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        // value={} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..." 
        />
        <button type="submit">Search</button>
      </form>
      <div className="links">
        <a href="/">Popular</a>
        <a href="/top-rated"> Top Rated</a>
        <a href="/upcoming"> Upcoming</a>
      </div>
    </nav>
  )
}

export default Navrbar