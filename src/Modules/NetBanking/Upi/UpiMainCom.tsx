import { Typography } from "@mui/material";
import { useState } from "react";
import { UpiInput } from "./UpiInput";
import { UpiList } from "./UpiList";
import './Upi.css'

function UpiMainCom() {
  const [todos, setTodos] = useState<Array<upi>>([]);

  const toggleSelect: ToggleSelect = selectedTodo => {
   console.log(selectedTodo.text)

    const updatedTodos = todos.map(upi => {
       console.log(upi)
      if (upi === selectedTodo) {
        return { ...upi, complete: !upi.complete };
      }
      return upi;
    });
    setTodos(updatedTodos);
  };

   console.log(todos)
  
  const addUpi: addUpi = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveUpi = todoToRemove => {
    let updatedTodos: Array<upi> = todos.filter(upi => upi.text != todoToRemove.text);
    setTodos(updatedTodos);
    console.log(updatedTodos)
  }


  return (
    <div className="upi-app">


      <UpiList todos={todos} toggleSelect={toggleSelect} onRemoveUpi={removeTodo}/>
      
      <UpiInput addUpi={addUpi} />
    </div>
  );
};

export default UpiMainCom;