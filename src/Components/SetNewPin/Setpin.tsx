

import {
  Box,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { MonoLogoImage, SBICON } from "../../Assets";
import ChooseButton from "../../Modules/Buttons/ChooseButton";
import "../VerifyOtp/VerifyOtp.css";
import { useSelector } from "react-redux";
import "../ChoosePin/ChoosePin.css";
import Footer from "../../Modules/Footer/Footer";
import SetNewButton from "../../Modules/Buttons/SetNewButton";


export const Setpin = () => {
    const [OTP, setOTP] = useState<string>("")

    const handleOtpChange = (otp:any) => {
      setOTP(otp)   
    }
  
    const error : string[] = useSelector((state : any) => state.error)

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
      width: "60px",
      height: "59.7px",
      margin: "30px 0px"
    } as React.CSSProperties
  }
  
  return (
    <>
      <Box  style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Money Sprint" src={MonoLogoImage} style={style.logo} />
          <Typography variant="h1" align="center">
            Set New Pin
          </Typography>
          <Typography mb={2} style={{maxWidth:"90%"}} className="VerificationOtp" align="center">
            In case the biometric doesn’t work, you can quickly access the app via PIN to unlock
          </Typography>
          <Typography variant="h4" align="center">
            Enter 4 Digit New PIN
          </Typography>
          <OtpInput
            value={OTP}
            isInputSecure
            onChange={handleOtpChange}
            numInputs={4}
            shouldAutoFocus={true}
            hasErrored={error.includes("Set_Mpin")}
            containerStyle={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"10px",
                color:"rgba(108, 99, 255, 0.8)"
            }}
            inputStyle={{
                border:"1px solid #dddfe2",
                borderRadius:"4px",
                padding:"10px",
                margin:"10px",
                width:"30px",
                height:"30px",
                fontSize: "35px",
                color:"rgba(108, 99, 255, 0.8)",
                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
            }}
            errorStyle={{
                border:"1px solid red",
            }}
          />
          <SetNewButton otp={OTP}/>
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
