import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import "./Upi.css"

interface TodoListItemProps {
  upi: upi;
  toggleComplete: ToggleComplete;
  onRemoveUpi: RemoveUpi;
  EditUpi: EditUpi;
}

export const UpiListFull: React.FC<TodoListItemProps> = ({ upi, toggleComplete, onRemoveUpi, EditUpi }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(upi.text);

  const onDelete = () => {
    onRemoveUpi(upi);
  }

  const onEdit = () => {
    console.log('edit');
  }

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    EditUpi(text);
  }

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    }
  ]
  return (
    <li className={upi.complete? "upi-row completed" : "upi-row"}>
      <label>
      <input
        type="radio"
        onChange={() => toggleComplete(upi)}
        checked={upi.complete}
        />
        {isEditOn ? <input className="edit-input" type="text" value={inputText} onChange={(e) => onTodoUpdate(e)}/> : upi.text}
      </label>
      <Dropdown
        options={dropdownOptions}
      />
    </li>
  )
}
