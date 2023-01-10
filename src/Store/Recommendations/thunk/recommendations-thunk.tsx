import { getData, getDataWithoutToken } from "../../../Utils/api";
import { globalConstant } from "../../../Utils/globalConstant";
import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
import { MFFeatures } from "../../../Utils/globalTypes";
import siteConfig from "../../../Utils/siteConfig";
import { setTokenExpiredStatusAction } from "../../Authentication/actions/auth-actions";
import { setMutualFundListWrtUserAmountAction } from "../actions/recommendations-action";

export const invThunk = () => null


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