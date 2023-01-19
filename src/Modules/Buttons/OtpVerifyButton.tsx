import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { store } from "../../Store/Store";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { setVerifyOtpThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { Button, Typography } from "@mui/material";
import _ from "underscore";
import { setLoadingAction } from "../../Store/Global/actions/global-actions";
import { postDataWithoutToken } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import { setIsRedeemVerifiedAction, setIsRedeemVerifiedErrorAction, setloginDataOnFailAction, setloginDataOnSuccessAction, setTokenExpiredStatusAction, setUserViewProfileDataAction } from "../../Store/Authentication/actions/auth-actions";
import { apiResponse } from "../../Utils/globalTypes";

type IProps = {
  otp: string;
  number: string | null;
  disabled: boolean;
  type: string
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

  const validateOTP = async (otp: string, type: string) => {

    if (otp.length !== 4) {
      addError("Login_OTP")
      return;
    }

    removeError("Login_OTP");
    addContactNumber("");
    props?.loading(true);

    let objBody = {
      mobilenumber: props?.number,
      otp: props?.otp,
      type: type
    }

    let res: apiResponse = await setVerifyOtpThunk(objBody);

    props?.loading(false);

    if (res?.error) {
      dispatch(setloginDataOnFailAction(res?.error));
      dispatch(setIsRedeemVerifiedErrorAction(res?.error));
      return;
    }

    if (type === "auth") {
      const response = res?.data;
      dispatch(setloginDataOnSuccessAction(response));
      dispatch(setUserViewProfileDataAction(response?.userInfo))
      dispatch(setTokenExpiredStatusAction(false));
    } else {
      // Navigate("/redemptiondone")
      dispatch(setIsRedeemVerifiedAction(true));
    }


    // postDataWithoutToken(
    //   objBody,
    //   siteConfig.AUTHENTICATION_OTP_VERIFY,
    //   siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    //   siteConfig.AUTHENTICATION_API_ID
    // )
    //   .then(res => res.json())
    //   .then((data) => {
    //     // dispatch(setLoadingAction(false));

    //   }).catch(err => {
    //     dispatch(setLoadingAction(false));
    //     dispatch(setloginDataOnFailAction({}));
    //     console.log(err);
    //   })

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
      onClick={() => validateOTP(props?.otp, props?.type)}
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





