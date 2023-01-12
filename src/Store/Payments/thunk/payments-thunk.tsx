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


