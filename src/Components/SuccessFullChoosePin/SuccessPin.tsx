
import { Divider, InputAdornment } from "@mui/material";
import {
  Box,
  TextField,
  
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";

import ContinueWithMobile from "../../Modules/Buttons/ContinueWithMobile";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import React, { useState } from "react";
import { AMFI, ContactError, IRDA, SuccessPinImage, SBICON } from "../../Assets";
import SuccessPinButton from "../../Modules/Buttons/SuccessPinButton";
import { useSelector } from "react-redux";
import "./SuccessFull.css";
import { Opacity } from "@mui/icons-material";


export const SuccessPin = () => {
  const [optError, setOtpError] = useState<boolean>(false)
    const [number, setNumber] = useState<string>('')
    const [otp,setOtp]= useState<string>('')
    const [IsContactModalOpen,setIsContactModalOpen]=useState<boolean>()
    const [NumberVerified,setNumberVerified]=useState<boolean>()
  const handleOtpChange = (otp:any) => {
    setOtp(otp);



  

        if(otp.length !=4){
            setOtpError(true)
          }else if(otp != "1234"){
            setOtpError(true)
          }
          else{
            setOtpError(false)
            setIsContactModalOpen(false)
            setNumberVerified(true)
        }
}

  const style = {
    background : {
      backgroundColor:'#f9f9f9',
      height : "100vh"
    } as React.CSSProperties,

    container : {
      boxShadow:'0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: "#fff",
      margin: "auto",
      width: "100%",
      maxWidth: "550px",
      padding: "30px 0px",
      transform: "translate(-50%, -66%)",
      height:"342px",
      left: "50%",
      bottom: "0px",
      borderRadius: "8px 8px 0px 0px",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,

    logo : {
      width: "120px",
      height: "120px",
      margin: "30px 0px",
      transform: "translate(10px, 36px)"
    } as React.CSSProperties,

    sbicon : {
      transform: "translate(330%, -60px)",
      width:'284.6px',
      height:'296.5px',
      margin:'53.1px 0 450.4px 59.4px',
      marginBottom:'25px',
      objectFit:'contain',
      Opacity:'0.06'
} as React.CSSProperties,



footer : {
      marginTop : "50px",
    },

    footerLogos : {
      display : "flex",
      gap : "15px"
    },

    IRDAnAMFI : {
      display: "flex",
      alignItem : "center"
    },

  }
  return (
    <>
      <Box  style={style.background}>
      <NavigationBar />
      <img alt="Money Sprint" src={SBICON} style={style.sbicon} />
        <Box style={style.container}>
          <img alt="Money Sprint" src={SuccessPinImage} style={style.logo} />
          <Typography variant="h1" align="center">
    Your PIN is set!
          </Typography>
          <Typography className="VerificationOtp" align="center">
          Please use your PIN when logging in.
          </Typography>
               <SuccessPinButton />
            
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
            <Box>
              <Divider style={{margin:"5px 0px"}}/>
              <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
              <sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
              <br/>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Terms and conditions</Typography>
              <Typography component="span" className="body1"> and </Typography>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Privacy policy</Typography>
            </Box>
            
             
            </Box>
           
           
        </Box>
       
      
    </>
  );
};
