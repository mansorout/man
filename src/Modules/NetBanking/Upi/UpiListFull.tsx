import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import "./Upi.css"

interface TodoListItemProps {
  upi: upi;
  toggleSelect: ToggleSelect;
  onRemoveUpi: RemoveUpi;
  
}

export const UpiListFull: React.FC<TodoListItemProps> = ({ upi, toggleSelect, onRemoveUpi }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(upi.text);

  const onDelete = () => {
    onRemoveUpi(upi);
  }



  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    
  }

  const dropdownOptions:any = {
    value: "Delete",
      onClick: onDelete,
      color: "red",
  } 
    
    
  
  return (
    <li className={upi.complete? "upi-row completed" : "upi-row"}>
      <label>
      <input
        type="radio"
        onChange={() => toggleSelect(upi)}
        // checked={upi.complete}
        />
        { upi.text}
      </label>
      <Dropdown
        options={dropdownOptions}
      />
    </li>
  )
}
