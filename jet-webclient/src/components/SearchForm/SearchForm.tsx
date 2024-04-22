import React, { useState, useEffect, ChangeEvent } from 'react';
import {Input, Listbox, ListboxItem} from "@nextui-org/react";
import {SearchIcon} from "../GenericComponents/SearchIcon";
import './SearchForm.css'
import {Button} from "@nextui-org/react";

interface PostcodeInputProps {
    showSearch: (postcode: string) => void;
}

const SearchForm:React.FC<PostcodeInputProps> =({showSearch})=> {
    const [postcode, setPostcode] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[] | null>(null);
  
 
  
    const fetchSuggestions = async (inputValue:string) => {
      try {
        const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}/autocomplete`);
        if (!response.ok) {
          throw new Error('Failed to fetch suggestions');
        }
        const data = await response.json();
        setSuggestions(data.result);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log("handle input change")
      event.preventDefault()
      const inputValue = event.target.value;
      fetchSuggestions(inputValue);

      setPostcode(inputValue);
    };
  
    const handleSelectSuggestion = (selectedPostcode: string) => {
      setPostcode(selectedPostcode);
      setSuggestions([]); // Clear suggestions after selection
    };
  return (
    <div className="search-form-container">

      <div className="search-container">
          <div className='search-label'> Where would you like to order from</div>
          <div className='search-bar'>
              <Input
                label="Search a restaurant"
                
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                  ],
                }}
                value={postcode}
                onChange={handleInputChange}
                placeholder="Type postal code to search..."
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            >
              </Input>
              <Button color="primary" className='show-button' onClick={()=>{showSearch(postcode)}}>
                SHOW
            </Button>  
          </div>
       


        </div>
        <div className='search-suggestions'>
          <div>
              {suggestions&&suggestions.length?suggestions.map((item,index) =>  <div key={index}>
                  <div className="search-suggestion-text" onClick={()=>{handleSelectSuggestion(item)}}>
                      <div className="">
                          <span className="">{item}</span>
                      </div>
                  </div>
              </div>):null}
          </div>
        </div>

    </div>
  );
}

export default SearchForm