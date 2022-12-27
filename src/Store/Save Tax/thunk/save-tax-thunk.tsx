import siteConfig from '../../../Utils/siteConfig'
import { getData } from '../../../Utils/api'
import {
    setSaveTaxInvestmentTypeOnFailAction,
    setSaveTaxInvestmentTypeOnSuccessAction,

    setSaveTaxCalculateOnSuccessAction,
    setSaveTaxCalculateOnFailAction
} from '../actions/save-tax-actions'

export const getDataSaveTaxInvestmentType = (investmentAmount: any) => {
    return (dispatch: any) => {
        getData(
            siteConfig.SAVETAX_COMPARISON + `/?amount=${investmentAmount}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.SAVE_TAX_API_ID,
            // `/?amount=${investmentAmount}`,
        ).then((response) => response.json()).then((res:any) => {
            dispatch(setSaveTaxInvestmentTypeOnSuccessAction(res?.data))
        }).catch((error) => {
            setSaveTaxInvestmentTypeOnFailAction(error.error)
        })


        // then(res => res.json()).then((data) => {
        //     debugger
        //     if (data?.error === true) {
        //         dispatch(setSaveTaxInvestmentTypeOnFailAction({}));
        //         return;
        //     }
        //     let response = data?.data;


        //     localStorage.setItem("accesstoken", response?.accesstoken);

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
        ).then((response) => response.json()).then((res) => {
            dispatch(setSaveTaxCalculateOnSuccessAction(res?.data))
        }).catch((error) => {
            setSaveTaxCalculateOnFailAction(error.error)
        })
    }
}