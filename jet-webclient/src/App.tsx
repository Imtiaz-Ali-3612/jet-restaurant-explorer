import  { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import './App.css'
import RestaurantGallery from "./components/RestaurantGallery/RestaurantGallery";
const App = () => {
  const [searchText,setSearchText] = useState('')
  const showSearch= (searchTxt:string) =>{
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
