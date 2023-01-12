import siteConfig from '../../../Utils/siteConfig'
import { getData, getDataWithoutToken, postData } from '../../../Utils/api'
import {
    postTermPurchaseProps,
    ulipReturnApiParamsTypes,
    getUlipReturnApiTypes,
    sendUlipGenrateApiTypes,
    // genrateApiTypes
} from '../constants/types'
import {
    setTermGenerateSuccessAction,
    setTermGenerateFailAction,
    setTermPurchaseSuccessAction,
    setTermPurchaseFailAction,
    setUlipReturnSuccessAction,
    setUlipReturnFailAction,
    setUlipGenrateSuccessAction,
    setUlipGenrateFailAction,
    setUlipListFailAction,
    setUlipListSuccessAction,
    setTermListFailAction,
    setTermListSuccessAction
} from '../actions/insurance-actions'
import { checkExpirationOfToken } from '../../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Authentication/actions/auth-actions'


export const postTermGenerate = (bodyData: postTermPurchaseProps) => {
    return (dispatch: any) => {
        postData(
            bodyData,
            siteConfig.RECOMMENDATION_TERM_GENERATE,
            siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setTermGenerateSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setTermGenerateFailAction(error?.error))
        })

    }
}

export const getTermListApi = (recommendation_id: number) => {
    return (dispatch: any) => {
        getData(
            siteConfig.RECOMMENDATION_TERM_LIST + `/?recommendation_id=${recommendation_id}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setTermListSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setTermListFailAction(error?.error))
        })

    }
}


export const postTermPurchase = (bodyData: postTermPurchaseProps) => {
    return (dispatch: any) => {
        postData(
            bodyData,
            siteConfig.INSURANCE_TERM_PURCHASE,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.INSURANCE_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            debugger
        }).catch((error) => {
            debugger
        })

    }
}

export const getUlipReturnApi = (url: ulipReturnApiParamsTypes) => {
    return (dispatch: any) => {
        getData(
            siteConfig.INSURANCE_ULIP_RETURN + `/?amount=${url.amount}&frequencytype=${url.frequencytype}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.INSURANCE_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setUlipReturnSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setUlipReturnFailAction(error?.error))
        })

    }
}


export const postUlipGenrateApi = (bodyData: sendUlipGenrateApiTypes) => {
    return (dispatch: any) => {
        postData(
            bodyData,
            siteConfig.RECOMMENDATION_ULIP_GENERATE,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setUlipGenrateSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setUlipGenrateFailAction(error?.error))
        })
    }
}


export const getUlipListApi = (recommendation_id: number) => {
    return (dispatch: any) => {
        getData(
            siteConfig.RECOMMENDATION_ULIP_LIST + `/?recommendation_id=${recommendation_id}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setUlipListSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setUlipListFailAction(error?.error))
        })

    }
}

export const getUlipSchemeDetailApi = (ulip_id: number) => {
    return (dispatch: any) => {
        getData(
            siteConfig.INSURANCE_ULIP_SCHEME_DETAIL + `/?ulip_id=${ulip_id}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.INSURANCE_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            // debugger
            // dispatch(setUlipListSuccessAction(data?.data))
        }).catch((error) => {
            // debugger
            // dispatch(setUlipListFailAction(error?.error))
        })

    }
}


export const setUlipGenerateQuoteThunk = async (objBody:any)=>{
    let res : any
    
    await postData(
        objBody,
        siteConfig.INSURANCE_ULIP_QUOTE_GENERATE,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const getULipSumassuredThunk = async (strUrl:any)=>{
    let res : any
    await getData(
        strUrl,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}


export const getListOfSuminsuredThunk = async ()=>{
    let res : any
    await getData(
        siteConfig.INSURANCE_HEALTH_SUMINSURED_LIST,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const getDetailsOfHealthPlanThunk = async (strUrl:any)=>{
    let res : any
    await getDataWithoutToken(
        strUrl,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const setGenerateHealthPolicyThunk = async (objBody:any)=>{
    let res : any
    
    await postData(
        objBody,
        siteConfig.INSURANCE_HEALTH_POLICY_GENARATION,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const setUpdateHealthPolicyThunk = async (objBody:any)=>{
    let res : any
    
    await postData(
        objBody,
        siteConfig.INSURANCE_HEALTH_POLICY_UPDATE,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const setGenerateTermPolicyThunk = async (objBody:any)=>{
    let res : any

    await postData(
        objBody,
        siteConfig.INSURANCE_TERM_PURCHASE,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}

export const getListOfInsurancePortfolioThunk = async ()=>{
    let res : any
    await getData(
        siteConfig.INSURANCE_PORTFOLIO_LIST,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED, 
        siteConfig.INSURANCE_API_ID
    )
    .then(res=> res.json())
    .then(data=> res = data)
    .catch(err => {
        console.log(err);
        return undefined
        
    })
    return res;
}
