import React from "react";
import { Container, InputAdornment } from "@mui/material";
import {
  Box,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Header from "../Header";
import "./Login.css";
import ContWithMobile from "../Buttons/ContWithMobile";
import ConnectWithGoogle from "../Buttons/ConnectWithGoogle";
import { FooterBox } from "../FooterBox";
import Image from "../../Assets/Group 6673@2x.png";
import { useState } from "react";


export const Login = () => {
  const [focus,setFocus]:any= useState(false);
 let  InputProps={
    startAdornment: 
      <InputAdornment position="start">
        +91 -
      </InputAdornment>,
  }
   
  const handleMobile =(e:any)=>{
        console.log(e.target.value)
  }
 

const handleFocus = () => {
  setFocus(true)
}

return (
    <>
      <Box className="Main_Box">
        <Header />
        <Box className="Grid_Box">
          <Grid
            sx={{
              alignItems: "center",
              justifyContent: "center",
              direction: "row",
              display: "flex",
            }}
          >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div
                style={{
                  marginTop: "48.3px",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={Image}
                />
              </div>

              <Typography sx={{marginLeft:'60px',marginTop:'30.9px'}} component='h1' variant="h1" align="center">
                Login With Mobile
              </Typography>
              <Typography variant="h6" align="center">
                
                Enter your mobile number to continue
              </Typography>
              
              <TextField
                className="text_field"
                margin="normal"
                label="Mobile number"
                type="number"
                {...focus ? {...{InputProps}}  : "" }
                 onChange={handleMobile}
                 onFocus={handleFocus}
              />


               </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
          <Stack>
            <ContWithMobile />
          </Stack>
          <Stack>
            <ConnectWithGoogle />
          </Stack>
          <FooterBox />
        </Box>
      </Box>
    </>
  );
};

