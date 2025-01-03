import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Card from './components/card';
import CardList from './components/cardList';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    setProfiles(data.items || []);
    setLoading(false);
    console.log(data);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch}/>
      <CardList profiles={profiles} />
    </>
  )
}

export default App
