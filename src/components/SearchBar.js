// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search by player name" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
