import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../Store/Store";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { verifyOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { Button, Typography } from "@mui/material";
import _ from "underscore";

type IProps = {
  otp: string;
  number: string;
  disabled: boolean;
}

const style = {
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    margin: "15px",
    width: "90%",
    maxWidth: "400px",
  } as React.CSSProperties,
  text: {
    color: "white"
  }
}

export const OtpVerifyButton = ({ otp, number, disabled }: IProps) => {

  const dispatch = useDispatch();

  const { addError, removeError } = bindActionCreators(ActionCreators, dispatch);

  const validateOTP = (otp: string) => {

    if (otp.length !== 4) {
      addError("Login_OTP")
      return;
    }
    removeError("Login_OTP");
    store.dispatch(verifyOtpThunk({ 'otp': otp, 'number': number, 'type': 'auth' }));

    // if (otpResponse !== "OTP has been Expired!" && otpResponse !== "Invalid OTP!" && otpResponse !== "Invalid Request Object!") {
    //   navigate("/otpverified")
    // } else {
    //   addError("Login_OTP")
    // }
  }

  return (
    <Button onClick={() => validateOTP(otp)} variant="contained" style={style.button} fullWidth disabled={disabled}>
      <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
    </Button>

  )
};





