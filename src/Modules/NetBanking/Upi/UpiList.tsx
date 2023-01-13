import React from "react";
import  {UpiListFull}  from './UpiListFull';
import "./Upi.css"

interface TodoListProps {
  todos: Array<upi>;
  toggleSelect: ToggleSelect;
  onRemoveUpi: RemoveUpi;
}

export const UpiList: React.FC<TodoListProps> = ({ todos, toggleSelect, onRemoveUpi }) => {
  return (
    <ul>
     {todos.map(upi => (
       <UpiListFull
          key={upi.text}
          upi={upi}
          toggleSelect={toggleSelect}
          onRemoveUpi={onRemoveUpi}
          
        />
     ))}
    </ul>
  );
};
