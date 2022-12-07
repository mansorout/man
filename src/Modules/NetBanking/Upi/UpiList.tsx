import React from "react";
import  {UpiListFull}  from './UpiListFull';
import "./Upi.css"

interface TodoListProps {
  todos: Array<upi>;
  toggleComplete: ToggleComplete;
  onRemoveUpi: RemoveUpi;
  EditUpi: EditUpi;
}

export const UpiList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveUpi, EditUpi }) => {
  return (
    <ul>
     {todos.map(upi => (
       <UpiListFull
          key={upi.text}
          upi={upi}
          toggleComplete={toggleComplete}
          onRemoveUpi={onRemoveUpi}
          EditUpi={EditUpi}
        />
     ))}
    </ul>
  );
};
