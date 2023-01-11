import { getData, getDataWithoutToken, postData } from "../../../Utils/api";
import { globalConstant } from "../../../Utils/globalConstant";
import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
import { MFFeatures } from "../../../Utils/globalTypes";
import siteConfig from "../../../Utils/siteConfig";
import { setTokenExpiredStatusAction } from "../../Authentication/actions/auth-actions";
import { setMutualFundListWrtUserAmountAction } from "../actions/recommendations-action";

export const invThunk = () => null

//Mutual Fund

export const setGenerateMutualFundWrtUserInputThunk = async (siteUrl: any)=>{
  let res: any;
  const {investmenttype_id, amount} = siteUrl
  await postData(
    {investmenttype_id : investmenttype_id, amount: amount} ,
    siteConfig.RECOMMENDATION_SAVETAX_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res=> res.json())
  .then((data:any)=>{
    res = data;
  }).catch(err=>{
    console.log(err)
    return undefined
  })
  return res
}


export const getMutualFundListWrtUserAmountThunk = async (amount: number, id: number, initialMFData: MFFeatures) => {
  let strUrl = siteConfig.RECOMMENDATION_MUTUALFUND_LIST + `?investmenttype_id=${id}&amount=${amount}`;
  let res: any;
  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.RECOMENDATION_API_ID
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


export const setAddMutualFundThunk = async (siteUrl:any) => {
  let res: any;
  const {recommendation_id, secid, amount } = siteUrl
  await postData(
    {recommendation_id: recommendation_id, secid : secid, amount : amount },
    siteConfig.RECOMMENDATION_MUTUALFUND_ADD,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.RECOMENDATION_API_ID
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

export const setUpdateMutualFundThunk = async (siteUrl:any) => {
  let res: any;
  const {recommendationfund_id  } = siteUrl
  await postData(
    {recommendationfund_id : recommendationfund_id},
    siteConfig.RECOMMENDATION_MUTUALFUND_UPDATE,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.RECOMENDATION_API_ID
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


export const getMasterFundListThunk = async (strUrl: string) => {
  let res: any;
  await getDataWithoutToken(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

export const getPercentageReturnOfFundThunk = async (siteUrl: any)=> {
  let res : any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res => res.json())
  .then(data=>{
    res = data;
  }).catch(err=>{
    console.log(err);
    return undefined
    
  })
  return res
}
export const getDetailOfFundThunk = async (siteUrl: any)=> {
  let res : any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res => res.json())
  .then(data=>{
    res = data;
  }).catch(err=>{
    console.log(err);
    return undefined
    
  })
  return res
}

export const getListOfMutualFundProviderCoThunk = async ()=> {
  let res : any;
  await getDataWithoutToken(
    siteConfig.RECOMMENDATION_FUND_PROVIDER_LIST,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res => res.json())
  .then(data=>{
    res = data;
  }).catch(err=>{
    console.log(err);
    return undefined
    
  })
  return res
}

export const getNAVOfMutualFundThunk = async (siteUrl: any)=> {
  let res : any;
  await getDataWithoutToken(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res => res.json())
  .then(data=>{
    res = data;
  }).catch(err=>{
    console.log(err);
    return undefined
    
  })
  return res
}
export const getComparisonBetweenMutualFundThunkAndUlip = async (siteUrl: any)=> {
  let res : any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res => res.json())
  .then(data=>{
    res = data;
  }).catch(err=>{
    console.log(err);
    return undefined
    
  })
  return res
}


export const getCategoryGroupListThunk = async () => {
  let res: any;
  await getDataWithoutToken(
    siteConfig.METADATA_CATEGORYGROUP_LIST,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.METADATA_API_ID
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

//new

// saveTax
export const setSavetaxGenerateThunk = async (siteUrl: any)=>{
  let res: any;
  const {investmenttype_id, amount} = siteUrl
  await postData(
    {investmenttype_id : investmenttype_id, amount: amount} ,
    siteConfig.RECOMMENDATION_SAVETAX_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res=> res.json())
  .then((data:any)=>{
    res = data;
  }).catch(err=>{
    console.log(err)
    return undefined
  })
  return res
}

export const getSavetaxListThunk = async (siteUrl:any) => {
  let res: any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

//Health Insurance

export const setHealthGenerateThunk = async (objBody:any) => {
  let res: any;
  await postData(
    objBody,
    siteConfig.RECOMMENDATION_HEALTH_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

export const getHealthListThunk = async (siteUrl:any) => {
  let res: any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

export const setHealthUpdateThunk = async (objBody:any) => {
  let res: any;
  await postData(
    objBody,
    siteConfig.RECOMMENDATION_HEALTH_UPDATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

//ulip
export const setGenerateUlipRecomendationsThunk = async (objBody:any) => {
  let res: any;
  await postData(
    objBody,
    siteConfig.RECOMMENDATION_ULIP_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

export const getUlipListThunk = async (siteUrl:any) => {
  let res: any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

//Term

export const setGenerateTermRecomendationsThunk = async (objBody:any) => {
  let res: any;
  await postData(
    objBody,
    siteConfig.RECOMMENDATION_TERM_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
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

export const getTermListThunk =  async (siteUrl:any)=>{
  let res : any;
  await getData(
    siteUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
  .then(res=> res.json())
  .then((data: any)=>{
    res=data;
  }).catch(err=>{
    console.log(err);
    return undefined
  })
  return res
}