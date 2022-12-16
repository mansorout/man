import { postData } from "../../../../Utils/api";
import siteConfig from "../../../../Utils/siteConfig";

export const mutualFundGenerateApiAction = (verifyInput: any) => {

  return (dispatch: any) => {
    postData(
      {},
      siteConfig.RECOMMENDATION_MUTUALFUND_GENERATE,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.RECOMENDATION_API_ID
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