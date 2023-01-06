import React from 'react'
import { Button,Typography } from '@mui/material'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styleButton.css'

export const EditProfieButton = () => {
    const navigate = useNavigate();
    // function handleClick(){
        
    //     navigate('/editprofile');
    
    // }
    
    const style = {
        button : {
            // marginBottom:"10px",
            marginTop:"10px",
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            // margin: "15px",
            width:"100%",
            // maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }

    return (
        <Button className='btnEditTab' variant="contained" style={style.button} fullWidth onClick={() => navigate('/editprofile')} >
            <Typography component="span" style={style.text} className="largeButtonText">Edit Details</Typography>
        </Button> 
    )
}


