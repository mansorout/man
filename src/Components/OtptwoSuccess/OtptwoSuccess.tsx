
import {
  Button,
  Box,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./OtptwoSuccess.css";
import React, { useState } from "react";
import { SuccessFullOtp,SBICON   } from "../../Assets";
import OtpSuccessButton from "../../Modules/Buttons/OtpSuccessButton";
import Footer from "../../Modules/Footer/Footer";
import BacktoLogin from "../../Modules/Buttons/BacktoLogin";


export const OtptwoSuccess = () => {

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
      justifyContent: "center",
      boxShadow:'0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
      left: "50%",
      bottom: "0px",
      position: "absolute"
    } as React.CSSProperties,

    logo : {
      width: "90px",
      margin:'30px 0px',
    } as React.CSSProperties
  }

return (
    <>
      <Box style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Money Sprint" src={SuccessFullOtp } style={style.logo} />
          <Typography mb={1} variant="h1" align="center" className="OtpSuccessfullTitle">
            Your PIN is successfully reset!
          </Typography>
          <Typography mb={2} style={{maxWidth:"90%"}} className="VerificationOtp" align="center">
          Please use your new PIN when logging in.
          </Typography>
          <BacktoLogin/>
          <Footer/>
        </Box>
      </Box>
      <img alt="logo" src={ SBICON } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px" }}
      />
    </>
  );
};

