import { Box, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { emaillogo } from '../../Assets/index'
import { cakelogo } from '../../Assets/index'
import { icbirthplacelogo } from '../../Assets/index'
import { locationlogo } from '../../Assets/index'
import { ic_income } from '../../Assets/index'
import { wclogo } from '../../Assets/index'
import { Editprofilebutton } from '../Buttons/Editprofilebutton'
import { Mylocationicon } from "../../Assets/index";
import { girlicon} from '../../Assets/index'
import {girliconicon} from  '../../Assets/index'




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
import { manicon } from '../../Assets/index'




import React from 'react'
import { height, padding } from '@mui/system'

function EEditprofileCard() {

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
    const { register, handleSubmit } = useForm();
    const onSubmit = () => alert(JSON.stringify(null));
    const Item = (() => ({

    }));


    return (

        <>
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius: "8px",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    marginLeft:"-30px"
                }}
            >
               <Typography>Gender</Typography>
               <Box sx={{ '& button': { m: 1 } }}>
 
               <div>
        <Button variant="outlined" size="small" sx={{ backgroundColor:" #fff",  borderRadius: "8px", boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.05) ",   height:" 42px", padding:" 6px 10px 6px 6px"}}>
        <img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
        <Typography sx={{marginLeft:"2px"}} >Male</Typography>

        </Button>
        <Button variant="outlined" size="medium" sx={{ backgroundColor:" #fff",  borderRadius: "8px", boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.05)",height:" 42px", padding:" 6px 10px 6px 6px"}}>
        <img src={ girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
      <Typography sx={{marginLeft:"2px"}}>  Female</Typography>
        </Button>
        <Button variant="outlined" size="large" sx={{ backgroundColor:" #fff",  borderRadius: "8px", boxShadow:" 0 1px 4px 0 rgba(0, 0, 0, 0.05)",height:" 42px", padding:" 6px 10px 6px 6px"}}>
        <img src={ girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
<Typography sx={{marginLeft:"2px"}}>        Transgender</Typography>
        </Button>
      </div>
</Box>
              
              <form onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "#ffffff", padding: "-4px" }}>
         
              <Stack m={2} spacing={6}>
              <TextField label="First Name" sx={{marginTop:"2px",width:"423px"}}>
    
              <img src={Mylocationicon} width="16px" height="22.6" alt="Google Logo" />
        </TextField>
     
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '198px' },
        marginTop:"60px",
        
      }}
      noValidate
      autoComplete="off"
      

      
    >
      
      <TextField  select label="City of residence" inputProps={register('Mobilenumber')}  />
      <TextField select  label="State" inputProps={register('Mobilenumber')} />
     
    
    </Box> 
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '198px' },
        marginTop:"60px",
        
      }}
      noValidate
      autoComplete="off"
      

      
    >
      
      <TextField  select label="Pincode" inputProps={register('Mobilenumber')}  />
      <TextField select  label="Country" inputProps={register('Mobilenumber')} />
     
    
    </Box> 

    

       
      
        <TextField label="Income Slab" inputProps={register('emailaddress')}  sx={{marginTop:"7px"}} />
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
                    <Editprofilebutton />
                </form>

            </Box>


        </>


    )
}

export default EEditprofileCard

