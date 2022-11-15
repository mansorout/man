import { Box, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { emaillogo } from '../../Assets/index'
import { cakelogo } from '../../Assets/index'
import { icbirthplacelogo } from '../../Assets/index'
import { locationlogo } from '../../Assets/index'
import { ic_income } from '../../Assets/index'
import { wclogo } from '../../Assets/index'
import { EditProfieButton } from '../Buttons/EditProfieButton'

import  { useRef } from 'react';
import { cameraIcon } from '../../Assets/index'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work'
import Paper from "@mui/material/Paper";


import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'





import React from 'react'
import { height, padding } from '@mui/system'

function EditprofileCard() {

    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


        },

        cameraIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#23db7b',
            width: '30px',
            height: '30px',
            marginLeft: "auto",
            marginRight: "auto",
            padding: '15px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
            display: "block",
            marginTop: "20px",
            marginBottom: "30px"
        },

        emailIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#64dbff',
            width: '80px',
            height: '80px',
            margin: '0 54px 22px 34px',
            padding: '20px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
        },
        ca: {
            // borderRadius: "170px 175px 175px 163px",
            backgroundColor: "#64dbff",
            width: "20px",
            height: "20px",
            padding: "10px",
            opacity: "0.9",

            // width: '80px',
            // height: '80px',
            // margin: '0 54px 22px 34px',
            // padding: '20px',
            // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            // border: 'solid 1px rgba(0, 0, 0, 0.08)',
        } as React.CSSProperties,
        // ellipse:{
        //     width:" 40px",
        //     height:" 40px",
        //     margin: "0 16px 0 0",
        //     padding: "10px",
        //     opacity: "0.3",
        //     background-color:" #64dbff",

        // } as React.CSSProperties,

    }
    const { register, handleSubmit} = useForm();
    const onSubmit = () => alert(JSON.stringify( null ));
    const Item = (( ) => ({
      
    }));
    
  //   const [value,setValue]=useState("")
  // const handleChange = e =>{
  //   console.log(`Typed=> ${e.target.value}`)
  //   setValue(e.target.value)
  // }


    return (
        <>
        
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius:"8px",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }}
            >
                    <form style={{backgroundColor:"#ffffff"}} >
      <Stack m={2} spacing={6}>
        <TextField label="First Name" sx={{marginTop:"2px"}}>
        </TextField>
        <TextField label="Middle Name" inputProps={register('lastName')}     />

        <TextField select label="Last Name" inputProps={register('gender')}  >
     
        </TextField>
        <TextField  label="Mobile Number" inputProps={register('Mobilenumber')} />
        <TextField label="Email Address" inputProps={register('emailaddress')}  />
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '198px' },
        marginTop:"60px",
        
      }}
      noValidate
      autoComplete="off"
      

      
    >
      
      <TextField  select label="Country of Birth" inputProps={register('Mobilenumber')}  />
      <TextField select  label="Place of birth" inputProps={register('Mobilenumber')} />
     
    
    </Box> 
   
{/*        
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '198px' },
        marginTop:"60px",
        
      }}
      noValidate
      autoComplete="off"
      

      
    >
      
      <TextField  select label="Mobile Number" inputProps={register('Mobilenumber')}  />
      <TextField select  label="Mobile Number" inputProps={register('Mobilenumber')} />
     
    
    </Box> */}

             

      
      </Stack>
    </form>

            </Box>


        </>


    )
}

export default EditprofileCard

