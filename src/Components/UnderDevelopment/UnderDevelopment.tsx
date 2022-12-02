
import { InputAdornment } from "@mui/material";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";

import ContinueWithMobile from "../../Modules/Buttons/ContinueWithMobile";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import React, { useState } from "react";
import { ContactError, MonoLogo } from "../../Assets";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Modules/Footer/Footer";
import LoginWithGoogle from "../loginwithgoogle/LoginWithGoogle";

export const UnderDevelopment = () => {

  const style = {
    background : {
      height : "100vh",
      width: "100vw",
      display:"flex",
      flexDirection:"column",
      boxSizing:"border-box",
      justifyContent:"flex-end",
      alignItems:"center",
    } as React.CSSProperties,

    container : {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    } as React.CSSProperties,

    logo : {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,

    contactInput : {
      width:"90%",
      maxWidth:"400px",
      marginTop: "20px"
    } as React.CSSProperties,

    divider : {
      margin:"10px",
      width : "90%",
      maxWidth : "400px",
      color : "#7b7b9d",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    },

    dividerBox : {
      width:"45%",
      height:".5px",
      padding:".5px",
      backgroundColor:"#7b7b9d"
    },

    errorText : {
      width:"100%",
      maxWidth:"400px",
      height: "15px",
      marginBottom:'10px'
    } as React.CSSProperties
  }

  const error : string[] = useSelector((state : any) => state.error)

  const [focus, setFocus] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("")

  const handleMobile = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNumber(e.target.value)
  }
  console.log(number)

  return (
    
            <Box className="background" style={style.background}>
        <NavigationBar />

        <Typography>
            Under Maintanance Page
        </Typography>
        
      </Box>
  );
};
