import siteConfig from '../../../Utils/siteConfig'
import { getData, postData } from '../../../Utils/api'
import {
    postTermPurchaseProps,
    ulipReturnApiParamsTypes,
    getUlipReturnApiTypes,
    sendUlipGenrateApiTypes
} from '../constants/types'
import {
    setTermPurchaseSuccessAction,
    setTermPurchaseFailAction,
    setUlipReturnSuccessAction,
    setUlipReturnFailAction,
    setUlipGenrateSuccessAction,
    setUlipGenrateFailAction,
    setUlipListFailAction,
    setUlipListSuccessAction
} from '../actions/insurance-actions'
import { checkExpirationOfToken } from '../../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Authentication/actions/auth-actions'

export const postTermPurchase = (bodyData: postTermPurchaseProps) => {
    return (dispatch: any) => {
        postData(
            bodyData,
            siteConfig.TERM_PURCHASE,
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


export const getUlipListApi = (recommendation_id : number) => {
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

export const getUlipSchemeDetailApi = (ulip_id : number) => {
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
            debugger
            // dispatch(setUlipListSuccessAction(data?.data))
        }).catch((error) => {
            debugger
            // dispatch(setUlipListFailAction(error?.error))
        })

    }
}