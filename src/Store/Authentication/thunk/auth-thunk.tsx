import { getData, getDataWithoutToken, postData, postDataWithoutToken } from "../../../Utils/api";
import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
import siteConfig from "../../../Utils/siteConfig";
import { addContactNumber } from "../../Action-Creators";
import { setLoadingAction } from "../../Global/actions/global-actions";
import { setIsUserAuthenticatedAction, setloginDataOnFailAction, setloginDataOnSuccessAction, setTokenExpiredStatusAction, setUserViewProfileDataAction } from "../actions/auth-actions";
// const { addError, removeError, addContactNumber } = bindActionCreators(
//   ActionCreators,
//   dispatch
// );

// export const verifyOtpThunk = (verifyInput: any) => {
//   const { otp, number, type } = verifyInput;

//   return (dispatch: any) => {

//     postDataWithoutToken(
//       { mobilenumber: number, otp: otp, type: type },
//       siteConfig.AUTHENTICATION_OTP_VERIFY,
//       siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
//       siteConfig.AUTHENTICATION_API_ID
//     )
//       .then(res => res.json())
//       .then((data) => {
//         dispatch(setLoadingAction(false));
//         if (data?.error) {
//           dispatch(setloginDataOnFailAction(data?.error));
//           return;
//         }
//         const response = data?.data;

//         dispatch(setloginDataOnSuccessAction(response));
//         dispatch(setUserViewProfileDataAction(response?.userdetails))
//         dispatch(setTokenExpiredStatusAction(false));
//       }).catch(err => {
//         dispatch(setLoadingAction(false));
//         dispatch(setloginDataOnFailAction({}));
//         console.log(err);
//       })
//   }
// }

export const setVerifyOtpThunk = async (objBody: any) => {
  let res: any

  await postDataWithoutToken(
    objBody,
    siteConfig.AUTHENTICATION_OTP_VERIFY,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })

  return res;
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

export const getUserProfileDataThunk = async () => {
  let res: any;
  await getData(
    siteConfig.AUTHENTICATION_PROFILE_VIEW,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
      // if (checkExpirationOfToken(data?.code)) {
      //   dispatch(setTokenExpiredStatusAction(true));
      //   return;
      // }

      // if (data?.error === true) {
      //   return;
      // }
      // // console.log(data?.data)
      // const response = data?.data;
      // dispatch(setUserViewProfileDataAction(response));
      //  localStorage.setItem("accesstoken", response?.accesstoken)
      // localStorage.setItem("userDetails", response?.userdetails?.emailaddress)
      // localStorage.setItem("userMobile", response?.userdetails?.mobilenumber)
      // localStorage.setItem("userGender", response.userdetails?.gender)
      // localStorage.setItem("userPlaceofbirth", response?.userdetails?.placeofbirth)
      // localStorage.setItem("userAddress", response?.userdetails?.addressline1)
      // localStorage.setItem("userIncomeslab", response?.userdetails?.incomeslab)

    })
    .catch(err => {
      console.log(err);
    })

  return res;
}

export const setEditProfileDataThunk = async (objBody: any) => {
  let res: any = {};
  await postData(
    objBody,
    siteConfig.AUTHENTICATION_PROFILE_EDIT,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then((data) => {
      res = data;
    }).catch(err => {
      console.log(err);
    })

  return res;
}

export const getListOfOnboardingIntroThunk = async () => {
  let res: any
  await getDataWithoutToken(
    siteConfig.AUTHENTICATION_INTRO_LIST,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const getBankDetailsWrtIFSCThunk = async (strUrl: string) => {
  let res: any
  await getDataWithoutToken(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const getCanceledChequeViewThunk = async () => {
  let res: any
  await getData(
    siteConfig.AUTHENTICATION_CHEQUE_VIEW,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const getCvlStatusThunk = async () => {
  let res: any
  await getData(
    siteConfig.AUTHENTICATION_CVL_STATUS,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const setAddUsersFamilyMemebrThunk = async (objBody: any) => {
  let res: any

  await postData(
    objBody,
    siteConfig.AUTHENTICATION_MEMBER_ADD,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const getListOfFamilyMemebrsThunk = async () => {
  let res: any
  await getData(
    siteConfig.AUTHENTICATION_MEMBER_LIST,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}

export const setUpdateFamilyMemberDetailsThunk = async (objBody: any) => {
  let res: any

  await postData(
    objBody,
    siteConfig.AUTHENTICATION_MEMBER_UPDATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.AUTHENTICATION_API_ID
  )
    .then(res => res.json())
    .then(data => res = data)
    .catch(err => {
      console.log(err);
      return undefined

    })
  return res;
}