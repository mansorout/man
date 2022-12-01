import React from 'react'
import { Button,Typography } from '@mui/material'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const InvestButton = () => {
   
    const naviagte = useNavigate();
    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "15px",
            width:"90%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }

    return (
        <Button  variant="contained" style={style.button} fullWidth >
            <Typography component="span" style={style.text} className="largeButtonText" onClick={()=>naviagte("/under")}>Continue</Typography>
        </Button> 
    )
}


