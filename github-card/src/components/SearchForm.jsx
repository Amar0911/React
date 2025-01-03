import React, {useState} from 'react';

const SearchForm = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        onSearch(query);
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Search Github Users" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" >Search</button>
      </form>
    </>
  )
}

export default SearchForm;