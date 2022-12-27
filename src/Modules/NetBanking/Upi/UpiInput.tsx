import { TextField } from '@mui/material';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./Upi.css"

interface TodoFormProps {
  addUpi: addUpi;
}

export const UpiInput: React.FC<TodoFormProps> = ({ addUpi }) => {
  const [newUpi, setNewUpi] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUpi(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addUpi(newUpi);
    setNewUpi("");
  }

  return (
    <form className="todo-form">
      <TextField
      inputProps={{
        maxLength: 15,
      }}
        onKeyPress={(e) =>
          /^[\w.-]+@[\w.-]+$/im.test(e.key) &&
          e.preventDefault()
        }

        id="outlined-basic" label="Enter UPI ID" variant="outlined" sx={{ width: "96%" }} type="text" value={newUpi} className="upi-input" onChange={handleChange}>
      </TextField>
      <button style={{ visibility: "hidden" }} onClick={handleSubmit}>Add Upi</button>

    </form>
  )
};
