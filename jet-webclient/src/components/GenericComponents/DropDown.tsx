import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React, { useState } from "react";
import './GenericComponent.css'
interface Option {
    label: string;
    value: string;
  }
  
  interface DropdownProps {
    options: Option[];
    onSelect: (selectedOption: string) => void;
  }
  
  const DropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption,updateSelectedOption] = useState("SORT BY")
    const onChangeOption = (value :string)=>{
        updateSelectedOption(value)
        onSelect(value)
    }
    return (
      <Dropdown>
        <DropdownTrigger className="drop-down">{selectedOption}</DropdownTrigger>
        <DropdownMenu
         aria-label="dropdown"
        >
          {options.map((option:Option) => {
            return (
                <DropdownItem key={option.value} onClick={() => onChangeOption(option.value) }>
                    {option.label}
                </DropdownItem>
  
            )
          }
        )}
        </DropdownMenu>
      </Dropdown>
    );
  };
  

export default DropDown