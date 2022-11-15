import React from 'react'
import { Button,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export const Editprofilebutton = () => {
    const navigate = useNavigate();
    function handleClick(){
        
        navigate('/vp');
        
    
    }
 
    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "32px",
            width:"90%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }

    return (
        <Button  variant="contained" style={style.button} fullWidth onClick={handleClick} >
            <Typography component="span" style={style.text} className="largeButtonText">Submit Details</Typography>
        </Button> 
    )
}


