import { getData, postData } from "../../../Utils/api";
import siteConfig from "../../../Utils/siteConfig";

export const paymentsReducerthunk = () => null

export const setPlaceLumpsumOrderThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_ORDER_LUMPSUM,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}
export const setOrderSipThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_ORDER_SIP,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}
export const setOrderToRedeemFundWrtUserInputThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_ORDER_REDEEM,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}
export const setOrderToCancelSipThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_ORDER_SIP_CANCEL,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}
export const setMakePaymentThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_PAYMENT,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}



export const setRegisterUserWithBseThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.PAYMENT_BSE_REGISTER,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}

export const getListOfTrasanctionDoneThunk = async (strUrl: string) => {
  let res: any;

  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}
export const getMandateAuthThunk = async (strUrl: string) => {
  let res: any;

  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}

export const getListOfPortfolioThunk = async (strUrl: string) => {
  let res: any;

  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.PAYMENT_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined;
    })

  return res;
}


export const setVerifyUpiIDThunk = async (objBody: any) => {
  let objHeaders: any = {
    "Content-Type": "application/json",
    Authorization: `Basic ${localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY)}`
  };

  let res: any = await fetch("https://api.attestr.com/api/v1/public/finanx/vpa", {
    method: "POST",
    mode: "cors",
    // cache: "no-cache",
    // credentials: "same-origin",
    headers: objHeaders,
    body: objBody,
  })
  // .then(res => res.json())
  // .then((data: any) => {

  // })
  // .catch(err => console.log(err));

  // console.log(res);
  return await res;
}