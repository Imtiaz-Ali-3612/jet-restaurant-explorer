import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext"; // Import your ThemeProvider
import ToggleTheme from "./ThemeToggle";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SearchForm from "./components/SearchForm/SearchForm";
import './App.css'
import RestaurantGallery from "./components/RestaurantGallery/RestaurantGallery";
const App = () => {
  const [searchText,setSearchText] = useState('')
  const showSearch= (searchTxt:string) =>{
    console.log("show")
    setSearchText("")
    setSearchText(searchTxt)
  }
  return (
          <div>
              <SearchForm showSearch={showSearch}/>
              <RestaurantGallery searchText={searchText}/>
          </div>
  );
};

export default App;
