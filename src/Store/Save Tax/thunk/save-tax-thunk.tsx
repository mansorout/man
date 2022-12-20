import siteConfig from '../../../Utils/siteConfig'
import { getData } from '../../../Utils/api'
import { setSaveTaxInvestmentTypeOnFailAction, setSaveTaxInvestmentTypeOnSuccessAction } from '../actions/save-tax-actions'

export const getDataSaveTaxInvestmentType = (investmentAmount: any) => {
    return (dispatch: any) => {
        getData(
            siteConfig.SAVETAX_COMPARISON + `/?amount=${investmentAmount}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.SAVE_TAX_API_ID,
            // `/?amount=${investmentAmount}`,
        ).then((res) => {
            debugger
        }).catch((error) => {
            debugger
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