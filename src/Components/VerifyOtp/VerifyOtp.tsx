
import { Box, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useEffect, useRef, useState } from "react";
import { VerifyOtpLogo, SBICON, commonlogo, cross, SBIcon } from "../../Assets";
import { OtpVerifyButton } from "../../Modules/Buttons/OtpVerifyButton";
import "../VerifyOtp/VerifyOtp.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { verifycxotp } from "../../Store/Reducers/action";
import { resendotp } from "../../Store/Reducers/action";
import { store } from "../../Store/Store"
import commonLogo from '../../Assets/MainLogo.svg'
import { resendOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import siteConfig from "../../Utils/siteConfig";
import { ActionCreators } from "../../Store";
import { bindActionCreators } from "redux";
import { setLoadingAction } from "../../Store/Global/actions/global-actions";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { setUserNameAndEmailInLocalStorage } from "../../Utils/globalFunctions";
import { relative } from "node:path/win32";

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
    // position:"relative"
  } as React.CSSProperties,

  logo: {
    width: "72px",
    margin: "20px 0px"
  } as React.CSSProperties,
}

export const VerifyOtp = () => {

  const navigate = useNavigate();

  const error: string[] = useSelector((state: any) => state.error);
  // const number: string = useSelector((state: any) => state.contact);
  const g_loginData: any = useSelector((state: any) => state?.authReducer?.login);
  const g_loading: boolean = useSelector((state: any) => state?.globalReducer?.loading);
  const number: string | null = localStorage.getItem(siteConfig.CONTACT_NUMBER);

  const [OTP, setOTP] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(45);

  const loadingRef = useRef(false);
  const [loading, setLoading] = useState<boolean>(false);
  loadingRef.current = loading
  const [errorLocal, setErrorLocal] = useState<string>("");
  const [isShowEnableVerifyBtn, setIsShowEnableVerifyBtn] = useState<boolean>(true);

  let intervalRef: any = useRef<number>(0);

  useEffect(() => {
    setErrorLocal("");
  }, [])

  // useEffect(() => {
  //   if (g_loading) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [g_loading])

  useEffect(() => {
    console.log(loadingRef.current, "loading")
  }, [loadingRef.current])

  useEffect(() => {
    setOTP("");
    let { data, error }: { data: any, error: string } = g_loginData;
    if (data?.accesstoken) {
      localStorage.setItem(siteConfig.ACCESS_TOKEN_KEY, data?.accesstoken);
      console.log(data?.userInfo, "data?.userInfo")
      localStorage.setItem(siteConfig.USER_INFO, JSON.stringify(data?.userInfo));

      let objUserDetail: any = data?.userInfo?.userdetails;

      setUserNameAndEmailInLocalStorage(objUserDetail);

      navigate("/otpverified");
    } else {
      if (error) {
        setSeconds(0);
        setMinutes(0);
        setErrorLocal(error);
        clearInterval(intervalRef.current);
      }
    }
  }, [g_loginData]);


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalRef.current);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [seconds]);

  const resendOTP = () => {
    setErrorLocal("");
    setMinutes(0);
    setSeconds(45);
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
        <SprintMoneyLoader loadingStatus={loadingRef.current} />
        {/* {
          loadingRef.current ?
            <>
            </>
            : <>
              <SprintMoneyLoader loadingStatus={false} />
            </>
        } */}
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
          <OtpVerifyButton
            disabled={isShowEnableVerifyBtn}
            otp={OTP}
            number={number}
            loading={(status: boolean) => setLoading(status)}
            type="auth"
          />
          {errorLocal ?
            <>
              <Typography component="span" sx={{ color: "red", fontSize: "14px" }}>
                {errorLocal}
              </Typography>
            </> : null}
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


