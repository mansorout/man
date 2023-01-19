import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Breadcrumbs, Grid, Toolbar, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import { VerifyOtpLogo, SBICON } from "../../Assets";
import "..//VerifyOtpOnCheckout/VerifyonCheckout.css";
import { useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import VerifySecButton from "../../Modules/Buttons/VerifySecButton";
import Navbar from "../../Components/CommonComponents/Navbar";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Sidebar from "../../Components/CommonComponents/Sidebar";
import { VerifySec } from "../../Components/VerifySecOTP/VerifySec";
import { checkExpirationOfToken, hideCharacterWithStars, hideNumbersWithStars } from "../../Utils/globalFunctions";
import { OtpVerifyButton } from "../Buttons/OtpVerifyButton";
import { store } from "../../Store/Store";
import { resendOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import SprintMoneyLoader from "../../Components/CommonComponents/sprintMoneyLoader";
import { setIsRedeemVerifiedAction, setIsRedeemVerifiedErrorAction, setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { apiResponse } from "../../Utils/globalTypes";
import { setOrderToRedeemFundWrtUserInputThunk } from "../../Store/Payments/thunk/payments-thunk";

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh"
  } as React.CSSProperties,
  background: {
    // backgroundColor: "#f9f9f9",

    width: "100vw",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "flex-end",
    alignItems: "center",
  } as React.CSSProperties,
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    width: "90%",
    maxWidth: "400px",
  } as React.CSSProperties,
  text: {
    color: "white"
  } as React.CSSProperties,
  container: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "500px",
    padding: "10px 0px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    // transform: "translate(-50%, 0%)",
    // left: "57%",
    bottom: "8%",
    position: "absolute"
  } as React.CSSProperties,

  logo: {
    width: "72px",
    margin: "20px 0px"
  } as React.CSSProperties,
}

export const VerifyonCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const refContainer = useRef();
  let intervalRef: any = useRef<number>(0);

  const [OTP, setOTP] = useState<string>("")
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(45);
  const [errorLocal, setErrorLocal] = useState<string>("");
  const [isShowEnableVerifyBtn, setIsShowEnableVerifyBtn] = useState<boolean>(true);

  const g_redeemVerification: any = useSelector((state: any) => state?.authReducer?.redeemVerification);

  const loadingRef = useRef(false);
  const [loading, setLoading] = useState<boolean>(false);
  loadingRef.current = loading

  const { addError, removeError } = bindActionCreators(ActionCreators, dispatch)

  const error: string[] = useSelector((state: any) => state.error)

  const number: string = useSelector((state: any) => state.contact)

  const userAuthData: any = useMemo(() => { return location?.state?.userAuthData }, []);
  const g_orderRedeemData = useSelector((state: any) => state?.paymentReducer?.orderRedeemData?.data);

  useEffect(() => {
    return () => {
      dispatch(setIsRedeemVerifiedAction(false));
      dispatch(setIsRedeemVerifiedErrorAction(""));
    }
  }, [])

  useEffect(() => {
    setOTP("");
    let { isRedeemVerified, error }: { isRedeemVerified: boolean, error: string } = g_redeemVerification;
    if (error && error.length) {
      setSeconds(0);
      setMinutes(0);
      setErrorLocal(error);
      clearInterval(intervalRef.current);
      return;
    }

    if (isRedeemVerified) {
      handleOrderRedeemFunctionality(g_orderRedeemData);
    }
  }, [g_redeemVerification]);

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

  const handleOrderRedeemFunctionality = async (objBody: any) => {
    let res: apiResponse = await setOrderToRedeemFundWrtUserInputThunk(objBody);

    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error == true) {
      return;
    }

    navigate("/redemptiondone");
  }

  const resendOTP = () => {
    setErrorLocal("");
    setMinutes(0);
    setSeconds(45);
    store.dispatch(resendOtpThunk({ mobilenumber: userAuthData?.number, type: "redeem" }))
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
      <Box style={{ width: "100vw" }} ref={refContainer}>
        <Navbar />
        <SprintMoneyLoader loadingStatus={loadingRef.current} />
        <Box sx={style.main}>
          <Grid className="verifyoncheckoutbox" container spacing={0}>
            <Grid item xs={0} sm={1} md={2} >
              <Toolbar />
              <Sidebar />
            </Grid>
            <Grid sx={{ padding: 2 }} item xs={12}>
              <Toolbar />
              <Box style={style.background}>
                <NavigationBar />
                <Box style={style.container} className="verifyoncheckoutcard">
                  <img alt="Money Sprint" src={VerifyOtpLogo} style={style.logo} />
                  <Typography mb={1} variant="h1" align="center">
                    Verify OTP
                  </Typography>
                  <Typography mb={2} style={{ maxWidth: "75%", fontSize: "18px" }} className="VerificationOtp" align="center">
                    Enter the 4 digit verification code we sent you on your mobile number <span style={{ color: "#3c3e42", fontSize: "20px" }}>({userAuthData?.number ? hideNumbersWithStars(userAuthData?.number) : ""})</span>
                    and email address<span style={{ color: "#3c3e42", fontSize: "20px" }}>({userAuthData?.email ? hideCharacterWithStars(userAuthData?.email) : ""})</span>
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
                    number={userAuthData?.number}
                    loading={(status: boolean) => setLoading(status)}
                    type="redeem"
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <img alt="logo" src={require("../../Assets/MainLogo.svg").default} width="275" height="275" style={{
          position: "absolute",
          right: "0px",
          top: "65px"
        }}
        />
      </Box>
    </>
  )
};



{/* <OtpInput
  isInputNum={true}
  value={OTP}
  onChange={handleOtpChange}
  numInputs={4}
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
/> */}
{/* <OtpVerifyButton
                    disabled={isShowEnableVerifyBtn}
                    otp={OTP}
                    number={number}
                    loading={(status: boolean) => setLoading(status)}
                  />
              <Button onClick={validateOTP} variant="contained" style={style.button} fullWidth>
                    <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
                  </Button>
                  <Typography mt={2} sx={{ fontSize: "14px", color: " #7b7b9d" }}>Not received the code yet?
                    <span className="textLink" style={{ cursor: "pointer", textDecoration: "underline" }} > Resend</span></Typography>
                </Box > */}


