import { postData } from "../../../Utils/api"
import siteConfig from "../../../Utils/siteConfig"
import { SET_LOGIN_DATA } from "../constants/auth-constants"

export const setloginDataOnSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOGIN_DATA,
      payload: data
    })
  }
}

export const setloginDataOnFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOGIN_DATA,
      payload: data
    })
  }
}

export const verifyOtp = (verifyInput: any) => {
  const { otp, number, type } = verifyInput;

  return (dispatch: any) => {
    postData(
      { mobilenumber: number, otp: otp, type: type },
      siteConfig.AUTHENTICATION_OTP_VERIFY,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        if (data?.error === true) {
          dispatch(setloginDataOnFailAction({}));
          return;
        }
        let response = data?.data;


        localStorage.setItem("accesstoken", response?.accesstoken);

        dispatch(setloginDataOnSuccessAction(data));
      }).catch(err => {
        dispatch(setloginDataOnFailAction({}));
        console.log(err);
      })
  }

}
