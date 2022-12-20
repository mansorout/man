import { postData } from "../../../Utils/api";
import siteConfig from "../../../Utils/siteConfig";
import { setIsUserAuthenticatedAction, setloginDataOnFailAction, setloginDataOnSuccessAction } from "../actions/auth-actions";

export const verifyOtpThunk = (verifyInput: any) => {
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
        const response = data?.data;
        dispatch(setloginDataOnSuccessAction(response));
      }).catch(err => {
        dispatch(setloginDataOnFailAction({}));
        console.log(err);
      })
  }
}


export const resendOtpThunk = (refreshtokendata: any) => {

}
