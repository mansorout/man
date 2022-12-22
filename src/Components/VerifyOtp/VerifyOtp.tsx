
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
import { resendOtpThunk, verifyOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import siteConfig from "../../Utils/siteConfig";


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

  const navigate = useNavigate();

  const error: string[] = useSelector((state: any) => state.error);
  const number: string = useSelector((state: any) => state.contact);
  const g_loginData: any = useSelector((state: any) => state?.authReducer?.login?.data);

  const [OTP, setOTP] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(30);
  const [isShowEnableVerifyBtn, setIsShowEnableVerifyBtn] = useState<boolean>(true);

  useEffect(() => {
    console.log(g_loginData);
    if (g_loginData?.accesstoken) {
      localStorage.setItem(siteConfig.ACCESS_TOKEN_KEY, g_loginData?.accesstoken);
      localStorage.setItem(siteConfig.USER_INFO, JSON.stringify(g_loginData?.userInfo));
      // navigate("/home");
      navigate("/otpverified");
    } else {

    }
  }, [g_loginData]);

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
    store.dispatch(resendOtpThunk({ mobilenumber: number, type: "auth" }))
  };

  const handleOtpChange = async (otp: any) => {
    setOTP(otp);
    setIsShowEnableVerifyBtn(true);
    if (otp.length === 4) {
      setIsShowEnableVerifyBtn(false);
    }
  }

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
          <OtpVerifyButton disabled={isShowEnableVerifyBtn} otp={OTP} number={number} />
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


