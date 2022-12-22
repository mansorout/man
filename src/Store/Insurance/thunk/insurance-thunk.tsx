import siteConfig from '../../../Utils/siteConfig'
import { postData } from '../../../Utils/api'
import {postTermPurchaseProps} from './props'
import { setTermPurchaseSuccessAction, setTermPurchaseFailAction } from '../actions/insurance-actions'

export const postTermPurchase = (data: postTermPurchaseProps) => {
    return (dispatch: any) => {
        postData(
            data,
            siteConfig.TERM_PURCHASE,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.INSURANCE_API_ID,
        ).then((res) => {
            debugger
        }).catch((error) => {
            debugger
        })

    }
}