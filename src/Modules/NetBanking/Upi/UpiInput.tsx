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
      <input type="text" value={newUpi} className="upi-input" placeholder="Enter UPI ID" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Upi
        </button>
    </form>
  )
};
