import siteConfig from '../../../Utils/siteConfig'
import { getData, getDataWithoutToken, postData } from '../../../Utils/api'
import { useDispatch, useSelector } from 'react-redux';
import {
    setSaveTaxInvestmentTypeOnFailAction,
    setSaveTaxInvestmentTypeOnSuccessAction,

    setSaveTaxCalculateOnSuccessAction,
    setSaveTaxCalculateOnFailAction,
    setModuleDefaultListSuccessAction,
    setModuleDefaultListFailAction,
    setSaveTaxGenrateSuccessAction,
    setSaveTaxGenrateFailAction,
    setSaveTaxListSuccessAction,
    setSaveTaxListFailAction
} from '../actions/save-tax-actions'
import { checkExpirationOfToken } from '../../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../../Store/Authentication/actions/auth-actions';
import {
    postSaveTaxGenrateApiTypes,
    getDataSaveTaxListApiTypes
} from '../constants/types'

export const getDataSaveTaxInvestmentType = (investmentAmount: any) => {
    return (dispatch: any) => {
        getData(
            siteConfig.SAVETAX_COMPARISON + `/?amount=${investmentAmount}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.SAVE_TAX_API_ID,
            // `/?amount=${investmentAmount}`,
        ).then((res) => res.json()).then((data:any) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }

            dispatch(setSaveTaxInvestmentTypeOnSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setSaveTaxInvestmentTypeOnFailAction(error.error))
        })


        // then(res => res.json()).then((data) => {
        //     debugger
        //     if (data?.error === true) {
        //         dispatch(setSaveTaxInvestmentTypeOnFailAction({}));
        //         return;
        //     }
        //     let res = data?.data;


        //     localStorage.setItem("accesstoken", res?.accesstoken);

        //     dispatch(setSaveTaxInvestmentTypeOnSuccessAction(data));
        // }).catch(err => {
        //     debugger
        //     dispatch(setSaveTaxInvestmentTypeOnFailAction({}));
        //     console.log(err);
        // })

    }
}


export const getDataSaveTaxCalculateApi = (data: any) => {
    return (dispatch: any) => {
        getData(
            siteConfig.SAVETAX_CALCULATE + `/?employeepf=${data.employeePF}&ppf=${data.PPF}&homeloanprincipal=${data.homeLoan}&postoffice=${data.nscPost}&insurancepremium=${data.lifeInsurance}&taxsavingfd=${data.taxSavinig}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.SAVE_TAX_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setSaveTaxCalculateOnSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setSaveTaxCalculateOnFailAction(error.error))
        })
    }
}


export const getDataModuleDefaultListApi = (module_id: number) => {
    return (dispatch: any) => {
        getDataWithoutToken(
            siteConfig.METADATA_MODULE_DEFAULTS_LIST + `/?module_id=${module_id}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.METADATA_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setModuleDefaultListSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setModuleDefaultListFailAction(error.error))
        })
    }
}

export const postSaveTaxGenrateApi = (bodyData: postSaveTaxGenrateApiTypes) => {
    return (dispatch: any) => {
        postData(
            bodyData,
            siteConfig.RECOMMENDATION_SAVETAX_GENERATE,
            siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setSaveTaxGenrateSuccessAction(data?.message))
        }).catch((error) => {
            dispatch(setSaveTaxGenrateFailAction(error.error))
        })
    }
}



export const getDataSaveTaxListApi = (data:getDataSaveTaxListApiTypes ) => {
    return (dispatch: any) => {
        getData(
            siteConfig.RECOMMENDATION_SAVETAX_LIST + `/?investmenttype_id=${data.investmenttype_id}&amount=${data.amount}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.RECOMENDATION_API_ID,
        ).then((res) => res.json()).then((data) => {
            if (checkExpirationOfToken(data?.code)) {
                dispatch(setTokenExpiredStatusAction(true));
                return;
            }
            dispatch(setSaveTaxListSuccessAction(data?.data))
        }).catch((error) => {
            dispatch(setSaveTaxListFailAction(error.error))
        })
    }
}