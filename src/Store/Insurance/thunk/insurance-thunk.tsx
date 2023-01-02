import siteConfig from '../../../Utils/siteConfig'
import { getData, postData } from '../../../Utils/api'
import {
    postTermPurchaseProps,
    ulipReturnApiParamsTypes,
    getUlipReturnApiTypes,
} from '../constants/types'
import {
    setTermPurchaseSuccessAction,
    setTermPurchaseFailAction,
    setUlipReturnSuccessAction,
    setUlipReturnFailAction
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