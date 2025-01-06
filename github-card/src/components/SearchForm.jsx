// ============================================== Controlled Component ==============================================


// import React, {useState} from 'react';

// const SearchForm = ({onSearch}) => {
//     const [query, setQuery] = useState("");

//     const handleSubmit = (e) => {

//         e.preventDefault();
//         onSearch(query);
//     };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="" id="" placeholder="Search Github Users" onChange={(e) => setQuery(e.target.value)} />
//         <button type="submit" >Search</button>
//       </form>
//     </>
//   )
// }

// export default SearchForm;

// ============================================== Uncontrolled Component ==============================================

import React, {useRef} from 'react';

const SearchForm = ({onSearch}) => {
    // const [query, setQuery] = useState("");

    const inputRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();
        const query = inputRef.current.value;
        if (query.trim()){
            onSearch(query);
        }
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" 
        ref={inputRef}
        placeholder="Search Github Users" />
        <button type="submit" >Search</button>
      </form>
    </>
  )
}

export default SearchForm;