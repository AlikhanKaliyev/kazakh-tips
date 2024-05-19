// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, filteredWords, onSelectWord }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      {searchQuery && filteredWords.length > 0 && (
        <ul className="dropdown-list">
          {filteredWords.map((word, index) => (
            <li key={index} onClick={() => onSelectWord(word)}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
