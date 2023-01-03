import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../Store/Store";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { verifyOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { Button, Typography } from "@mui/material";
import _ from "underscore";
import { setLoadingAction } from "../../Store/Global/actions/global-actions";
import { postDataWithoutToken } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import { setloginDataOnFailAction, setloginDataOnSuccessAction, setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";

type IProps = {
  otp: string;
  number: string | null;
  disabled: boolean;
  loading: (status: boolean) => void
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

export const OtpVerifyButton = (props: IProps) => {

  const btnRef: any = useRef();
  const dispatch = useDispatch();

  const { addError, removeError, addContactNumber } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    if (props?.otp && props?.otp.length) {
      btnRef.current.focus();
    }
  }, [props?.otp])

  const validateOTP = (otp: string) => {

    if (otp.length !== 4) {
      addError("Login_OTP")
      return;
    }

    removeError("Login_OTP");
    addContactNumber("");
    props?.loading(true);
    // dispatch(setLoadingAction(true));
    let objBody = {
      mobilenumber: props?.number,
      otp: props?.otp,
      type: "auth"
    }
    postDataWithoutToken(
      objBody,
      siteConfig.AUTHENTICATION_OTP_VERIFY,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        // dispatch(setLoadingAction(false));
        props?.loading(false);
        if (data?.error) {
          dispatch(setloginDataOnFailAction(data?.error));
          return;
        }
        const response = data?.data;

        dispatch(setloginDataOnSuccessAction(response));
        dispatch(setTokenExpiredStatusAction(false));
      }).catch(err => {
        dispatch(setLoadingAction(false));
        dispatch(setloginDataOnFailAction({}));
        console.log(err);
      })

    // }
    // store.dispatch(verifyOtpThunk({ 'otp': otp, 'number': number, 'type': 'auth' }));
    // if (otpResponse !== "OTP has been Expired!" && otpResponse !== "Invalid OTP!" && otpResponse !== "Invalid Request Object!") {
    //   navigate("/otpverified")
    // } else {
    //   addError("Login_OTP")
    // }
  }

  return (
    <Button
      onClick={() => validateOTP(props?.otp)}
      ref={btnRef}
      variant="contained"
      style={style.button}
      fullWidth
      disabled={props?.disabled}
    >
      <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
    </Button>

  )
};





