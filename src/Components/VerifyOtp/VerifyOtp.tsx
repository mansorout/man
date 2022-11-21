
import {Box,Typography} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { VerifyOtpLogo,SBICON } from "../../Assets";
import {OtpVerifyButton} from "../../Modules/Buttons/OtpVerifyButton";
import "../VerifyOtp/VerifyOtp.css";
import {  useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { verifycxotp } from "../../Store/Reducers/action";
import { resendotp } from "../../Store/Reducers/action";
import {store} from "../../Store/Store"


export const VerifyOtp = () => {

  const [OTP, setOTP] = useState<string>("")
  let refreshtokendata :any = localStorage.getItem('refreshtoken')
    console.log(refreshtokendata);

  const ResendOtp =()=>{
    store.dispatch(resendotp({'refreshtoken': refreshtokendata})) 
    
  }

  const handleOtpChange = (otp:any) => {
    setOTP(otp) 
    if(otp.length === 4){
      store.dispatch(verifycxotp({'otp': otp,'number':number}))   
    localStorage.setItem("loggedin","true")
    }
    
  }

  const error : string[] = useSelector((state : any) => state.error)

  const style = {
    background : {
      backgroundColor:"#f9f9f9",
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
      width: "72px",
      margin: "20px 0px"
    } as React.CSSProperties,
  }

  const navigate = useNavigate()

  const number : string = useSelector((state : any) => state.contact)

  return (
    <>
      <Box  style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Money Sprint" src={VerifyOtpLogo} style={style.logo} />
          <Typography mb={1} variant="h1" align="center">
            Verify OTP
          </Typography>
          <Typography mb={2} style={{maxWidth:"90%"}} className="VerificationOtp" align="center">
            Enter the 4 digit verification code 
            we sent you on your mobile number
          </Typography>
          <OtpInput
            value={OTP}
            onChange={handleOtpChange}
            numInputs={4}
            shouldAutoFocus={true}
            hasErrored={error?.includes("Login_OTP")}
            containerStyle={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"10px",
                color:"black"
            }}
            inputStyle={{
                border:"1px solid #dddfe2",
                borderRadius:"4px",
                padding:"10px",
                margin:"10px",
                width:"30px",
                height:"30px",
                color:"black",
                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)"
            }}
            errorStyle={{
                border:"1px solid red",
            }}
          />
          <OtpVerifyButton otp={OTP} number={number}/>
          
          <Typography  sx={{ fontSize: "14px", color: " #7b7b9d" }}>Not received the code yet? 
          <span onClick={ResendOtp} className="textLink" style={{cursor:"pointer"}} > Resend</span></Typography>
          
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
