import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DropdownItemProps {
  icon?: string
  options:any
}

export const Dropdown = (options:any) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(options)
  console.log(options?.options?.color)
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
  }

  

  return (
    <div  className="dropdown">
      <div className="dropdown-title" onClick={()=>options?.options?.onClick()}>
        <DeleteForeverIcon  sx={{color:"red"}} />
      </div>
      {/* {isOpen && <div className="dropdown-list-container"> */}
        {/* {options.map((option: Option) => {
          return(
            <button onClick={option.value == "Edit" ? () => setIsOpen(false) : () => option.onClick()} className={`${option.color} dropdown-list-btn`}>
              {option.value}
            </button>
          )
        })} */}
      {/* </div>} */}
    </div>
  )
}



