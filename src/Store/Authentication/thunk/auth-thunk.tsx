import { getData, postData, postDataWithoutToken } from "../../../Utils/api";
import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
import siteConfig from "../../../Utils/siteConfig";
import { addContactNumber } from "../../Action-Creators";
import { setLoadingAction } from "../../Global/actions/global-actions";
import { setIsUserAuthenticatedAction, setloginDataOnFailAction, setloginDataOnSuccessAction, setTokenExpiredStatusAction, setUserViewProfileDataAction } from "../actions/auth-actions";
// const { addError, removeError, addContactNumber } = bindActionCreators(
//   ActionCreators,
//   dispatch
// );

export const verifyOtpThunk = (verifyInput: any) => {
  const { otp, number, type } = verifyInput;

  return (dispatch: any) => {
    dispatch(setLoadingAction(true));
    postDataWithoutToken(
      { mobilenumber: number, otp: otp, type: type },
      siteConfig.AUTHENTICATION_OTP_VERIFY,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        dispatch(setLoadingAction(false));
        if (data?.error === true) {
          dispatch(setloginDataOnFailAction({}));
          return;
        }
        const response = data?.data;
        dispatch(setloginDataOnSuccessAction(response));
        dispatch(setTokenExpiredStatusAction(false));
      }).catch(err => {
        dispatch(setloginDataOnFailAction({}));
        console.log(err);
      })
  }
}


export const resendOtpThunk = ({ mobilenumber, type }: any) => {
  return (dispatch: any) => {
    postDataWithoutToken(
      { mobilenumber: mobilenumber, type: type },
      siteConfig.AUTHENTICATION_OTP_SEND,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        if (data?.error === true) {
          console.log("error true");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const getUserProfileDataThunk = () => {
  return (dispatch: any) => {
    getData(
      siteConfig.AUTHENTICATION_PROFILE_VIEW,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then(data => {
        if (checkExpirationOfToken(data?.code)) {
          dispatch(setTokenExpiredStatusAction(true));
          return;
        }

        if (data?.error === true) {
          return;
        }
     console.log(data?.data)
     const response = data?.data;
     console.log(response?.userdetails)
    //  localStorage.setItem("accesstoken", response?.accesstoken)
     localStorage.setItem("userDetails",response?.userdetails?.emailaddress)
     localStorage.setItem("userMobile",response?.userdetails?.mobilenumber)
     localStorage.setItem("userGender",response.userdetails?.gender)
    localStorage.setItem("userPlaceofbirth",response?.userdetails?.placeofbirth)
     localStorage.setItem("userAddress",response?.userdetails?.addressline1)
     localStorage.setItem("userIncomeslab",response?.userdetails?.incomeslab)
        dispatch(setUserViewProfileDataAction(response));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

