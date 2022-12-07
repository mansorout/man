import { Typography } from "@mui/material";
import { useState } from "react";
import { UpiInput } from "./UpiInput";
import { UpiList } from "./UpiList";
import './Upi.css'

function UpiMainCom() {
  const [todos, setTodos] = useState<Array<upi>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(upi => {
      if (upi === selectedTodo) {
        return { ...upi, complete: !upi.complete };
      }
      return upi;
    });
    setTodos(updatedTodos);
  };

  const addUpi: addUpi = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveUpi = todoToRemove => {
    let updatedTodos: Array<upi> = todos.filter(upi => upi.text != todoToRemove.text);
    setTodos(updatedTodos);
  }

  const EditUpi: EditUpi = todoToEdit => {
    let todoToUpdateIndex: number = todos.findIndex(upi => upi.text == todoToEdit.text);
    console.log(todoToUpdateIndex);
  }

  return (
    <div className="upi-app">


      <UpiList todos={todos} toggleComplete={toggleComplete} onRemoveUpi={removeTodo} EditUpi={EditUpi} />
      <Typography sx={{ color: "#7b7b9d", fontSize: "12px", marginLeft: "4px" }}>
        Enter UPI ID
      </Typography>
      <UpiInput addUpi={addUpi} />
    </div>
  );
};

export default UpiMainCom;