// import React, { useState } from 'react';
// import styles from './Search.module.css';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Search query:', searchQuery);
//     // Implement search functionality here
//   };

//   return (
//     <form className={styles.searchBar} onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search for albums, songs..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         className={styles.searchInput}
//       />
//       <button type="submit" className={styles.searchButton}>
//         <SearchIcon />
//       </button>
//     </form>
//   );
// };

// export default Search;

// src/components/Search/Search.jsx
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from './Search.module.css';

const Search = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Dummy suggestion data; replace with real suggestions as needed.
  const suggestions = [
    { title: 'Song One' },
    { title: 'Song Two' },
    { title: 'Song Three' },
    { title: 'Album One' },
    { title: 'Album Two' },
  ];

  return (
    <div className={styles.searchContainer}>
      <Autocomplete
        id="search-autocomplete"
        freeSolo
        options={suggestions.map(option => option.title)}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log('Selected:', newValue);
          // Implement your search logic here
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          // Optionally trigger API call here for dynamic suggestions
        }}
        renderInput={(params) => (
          <TextField 
            {...params}
            placeholder="Search a album of your choice" // ✅ Matches Figma and test
            variant="outlined"
            size="small"
            InputProps={{
              ...params.InputProps,
              style: { backgroundColor: 'white' }
            }}
          />
        )}
      />
    </div>
  );
};

export default Search;


