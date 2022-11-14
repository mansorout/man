import { Divider, InputAdornment } from "@mui/material";
import {
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./OtptwoSuccess.css";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import React, { useState } from "react";
import { AMFI, ContactError, IRDA ,SuccessFullOtp,SBICON   } from "../../Assets";
import { useSelector } from "react-redux";
import OtptwoSuccessButton from "../../Modules/Buttons/OtptwoSuccessButton";
import { useNavigate } from "react-router-dom";


export const OtptwoSuccess = () => {

  const style = {
    background : {
      height : "100vh",
      backgroundColor:'#f9f9f9',
      width: "100vw"
      
    } as React.CSSProperties,

    container : {
      boxShadow:'0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: "white",
      margin: "auto",
      width: "100%",
      maxWidth: "550px",
      padding: "30px 0px",
      transform: "translate(-50%, -56%)",
      left: "50%",
      bottom: "0px",
      borderRadius: "20px 20px 20px 20px",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      
    } as React.CSSProperties,

    logo : {
      width: "120px",
      marginBottom:'25px',
    } as React.CSSProperties,
    sbicon : {
      transform: "translate(302%, -44px)",
      width:'284.6px',
      height:'296.5px',
      margin:'53.1px 0 450.4px 59.4px',
      marginBottom:'25px',
      objectFit:'contain',
      Opacity:'0.06'
    } as React.CSSProperties,

    divider : {
      width : "90%",
      maxWidth : "400px",
      margin : "auto",
      color : "#7b7b9d",
    },

    footer : {
      marginTop : "48%",
      marginLeft:"44%"
    },

    footerLogos : {
      display : "flex",
      gap : "15px",
      
    },

    IRDAnAMFI : {
      display: "flex",
      alignItem : "center"
    },

  }

  const navigate = useNavigate();

return (
    <>
      <Box style={style.background}>
        <NavigationBar />
        
        <Box style={style.container}>
          <img alt="Money Sprint" src={SuccessFullOtp } style={style.logo} />
          <Typography variant="h1" align="center" className="OtpSuccessfullTitle">
          Your PIN is successfully reset!
          </Typography>
          <Typography variant="h5" align="center" className="OtpSuccessfullDescr">
          Please use your new PIN when logging in.        
            </Typography>
          <OtptwoSuccessButton/>
      
          
  
        </Box>
        <Box style={style.footer}>
            <Box style={style.footerLogos}>
                <Box style={style.IRDAnAMFI}>
                  <img src={IRDA} width="32px" alt="IRDA" />
                  <Box>
                    <Typography className="caption">IRDA</Typography>
                    <Typography style={{fontWeight:500}} className="caption">0777</Typography>
                  </Box>
                  <Divider style={{marginLeft:"15px"}} orientation="vertical"/>
                </Box>
                <Box style={style.IRDAnAMFI}>
                  <img src={AMFI} width="32px" alt="IRDA" />
                  <Box>
                    <Typography className="caption">AMFI</Typography>
                    <Typography style={{fontWeight:500}} className="caption">150601</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box marginLeft="40%">
              <Divider style={{margin:"5px 0px"}}/>
              <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
              <sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
              <br/>
              <Typography component="span" onClick={()=>navigate("/TermsandCondition")} style={{cursor:"pointer"}} className="textLink">Terms and conditions</Typography>
              <Typography component="span" className="body1"> and </Typography>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Privacy policy</Typography>
            </Box>
      
      </Box>
      <img alt="logo" src={ SBICON } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px"
            }}/>
    </>
  );
};

