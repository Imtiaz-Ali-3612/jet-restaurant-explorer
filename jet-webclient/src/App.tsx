import { useState } from 'react';
import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';
import RestaurantGallery from './components/RestaurantGallery/RestaurantGallery';
const App = () => {
  /* SEARCH INPUT */
  const [searchText, setSearchText] = useState('');
  const showSearch = (searchTxt: string) => {
    // postal code to be searched
    setSearchText(searchTxt);
  };
  return (
    <div>
      {/* search input */}
      <SearchForm showSearch={showSearch} />
      {/* showing search results */}
      <RestaurantGallery searchText={searchText} />
    </div>
  );
};

export default App;
