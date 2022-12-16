
import { Box, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import { VerifyOtpLogo, SBICON, commonlogo, cross, SBIcon } from "../../Assets";
import { OtpVerifyButton } from "../../Modules/Buttons/OtpVerifyButton";
import "../VerifyOtp/VerifyOtp.css";
import { useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { verifycxotp } from "../../Store/Reducers/action";
import { resendotp } from "../../Store/Reducers/action";
import { store } from "../../Store/Store"
import commonLogo from '../../Assets/MainLogo.svg'
import { verifyXOtpNew } from "../../Store/Authentication/actions/auth-actions";


const style = {
  background: {
    backgroundColor: "#f9f9f9",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "flex-end",
    alignItems: "center",
  } as React.CSSProperties,

  container: {
    backgroundColor: "white",
    width: "96%",
    maxWidth: "500px",
    padding: "10px 0px",
    borderRadius: "20px 20px 0px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    transform: "translate(-50%, 0%)",
    left: "50%",
    bottom: "0px",
    position: "absolute"
  } as React.CSSProperties,

  logo: {
    width: "72px",
    margin: "20px 0px"
  } as React.CSSProperties,
}



export const VerifyOtp = () => {

  const [OTP, setOTP] = useState<string>("")
  let refreshtokendata: any = localStorage.getItem('refreshtoken')

  const ResendOtp = () => {
    store.dispatch(resendotp({ 'refreshtoken': refreshtokendata }))

  }

  const [otp, setOtp] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const handleOtpChange = (otp: any) => {

    setOTP(otp)
    if (otp.length === 4) {
      store.dispatch(verifycxotp({ 'otp': otp, 'number': number, 'type': 'auth' }))
      // store.dispatch(verifyXOtpNew({ 'otp': otp, 'number': number, 'type': 'auth' }))
      localStorage.setItem("loggedin", "true")
    }

  }

  const error: string[] = useSelector((state: any) => state.error)

  const navigate = useNavigate()

  const number: string = useSelector((state: any) => state.contact)

  return (
    <>
      <Box style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Money Sprint" src={VerifyOtpLogo} style={style.logo} />
          <Typography mb={1} variant="h1" align="center">
            Verify OTP
          </Typography>
          <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
            Enter the 4 digit verification code
            we sent you on your mobile number
          </Typography>
          <OtpInput

            value={OTP}
            onChange={handleOtpChange}
            numInputs={4}
            isInputNum={true}
            shouldAutoFocus={true}
            hasErrored={error?.includes("Login_OTP")}

            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              color: "black"
            }}
            inputStyle={{
              border: "1px solid #dddfe2",
              borderRadius: "4px",
              padding: "10px",
              margin: "10px",
              width: "30px",
              height: "30px",
              color: "black",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)"
            }}
            errorStyle={{
              border: "1px solid red",
            }}
          />
          <OtpVerifyButton otp={OTP} number={number} />

          {seconds > 0 || minutes > 0 ? (
            <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>Not received the code yet?
              <span
                // disabled={seconds > 0 || minutes > 0}
                style={{
                  cursor: "pointer", textDecoration: "underline",
                  color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                }}
                onClick={resendOTP} className="textLink" > Resend</span> </Typography>
          )}


          <Footer />
        </Box>
      </Box>
      <img alt="logo" src={require("../../Assets/MainLogo.svg").default} width="275" height="275" style={{
        position: "absolute",
        right: "0px",
        top: "65px"
      }}
      />
    </>
  );
};


