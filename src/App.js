// src/App.js

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import data from './data.json';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [translation, setTranslation] = useState('');

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setTranslation(data[word]);
    setSearchQuery('');
  };

  const filteredWords = Object.keys(data).filter((key) => {
    const words = key.split(', ');
    return words.some(word => word.toLowerCase().startsWith(searchQuery.toLowerCase()));
  });

  return (
    <div className="App">
      <br/>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        filteredWords={filteredWords} 
        onSelectWord={handleWordClick} 
      />
      {selectedWord && (
        <div className="translation">
          <h2>{translation}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
