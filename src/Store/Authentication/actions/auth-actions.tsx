import { postData } from "../../../Utils/api"
import siteConfig from "../../../Utils/siteConfig"
import { SET_LOGIN_DATA } from "../constants/auth-constants"

export const setloginDataAction = (dummy: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOGIN_DATA,
      payload: dummy
    })
  }
}

export const verifyXOtpNew = (verifyInput: any) => {
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
          dispatch({ type: 'LOGIN_FAILED' })
          return;
        }
        let response = data?.data

        localStorage.setItem("accesstoken", response?.accesstoken)
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: data
        })
      }).catch(err => {
        dispatch({ type: 'LOGIN_FAILED' })
        console.log(err);
      })
  }

}
