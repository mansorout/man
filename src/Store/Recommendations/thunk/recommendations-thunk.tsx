import { getData, getDataWithoutToken, postData } from "../../../Utils/api";
import { globalConstant } from "../../../Utils/globalConstant";
import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
import { MFFeatures } from "../../../Utils/globalTypes";
import siteConfig from "../../../Utils/siteConfig";
import { setTokenExpiredStatusAction } from "../../Authentication/actions/auth-actions";
import { setMutualFundListWrtUserAmountAction } from "../actions/recommendations-action";

export const setGenerateMutualFundWrtUserInputThunk = async (objBody: any) => {
  let res: any;
  await postData(
    objBody,
    siteConfig.RECOMMENDATION_SAVETAX_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
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


export const setAddMutualFundThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
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

export const setUpdateMutualFundThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
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

export const getPercentageReturnOfFundThunk = async (strUrl: any) => {
  let res: any;
  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
    }).catch(err => {
      console.log(err);
      return undefined

    })
  return res
}
export const getDetailOfFundThunk = async (strUrl: any) => {
  let res: any;
  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
    }).catch(err => {
      console.log(err);
      return undefined

    })
  return res
}

export const getListOfMutualFundProviderCoThunk = async () => {
  let res: any;
  await getDataWithoutToken(
    siteConfig.RECOMMENDATION_FUND_PROVIDER_LIST,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
    }).catch(err => {
      console.log(err);
      return undefined

    })
  return res
}

export const getNAVOfMutualFundThunk = async (strUrl: any) => {
  let res: any;
  await getDataWithoutToken(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
    }).catch(err => {
      console.log(err);
      return undefined

    })
  return res
}
export const getComparisonBetweenMutualFundThunkAndUlip = async (strUrl: any) => {
  let res: any;
  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then(data => {
      res = data;
    }).catch(err => {
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

export const setSavetaxGenerateThunk = async (objBody: any) => {
  let res: any;

  await postData(
    objBody,
    siteConfig.RECOMMENDATION_SAVETAX_GENERATE,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err)
      return undefined
    })
  return res
}

export const getSavetaxListThunk = async (strUrl: any) => {
  let res: any;
  await getData(
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

export const setHealthGenerateThunk = async (objBody: any) => {
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

export const getHealthListThunk = async (strUrl: any) => {
  let res: any;
  await getData(
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

export const setHealthUpdateThunk = async (objBody: any) => {
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

export const setGenerateUlipRecomendationsThunk = async (objBody: any) => {
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

export const getUlipListThunk = async (strUrl: any) => {
  let res: any;
  await getData(
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

export const setGenerateTermRecomendationsThunk = async (objBody: any) => {
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

export const getTermListThunk = async (strUrl: any) => {
  let res: any;
  await getData(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.RECOMENDATION_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
      res = data;
    }).catch(err => {
      console.log(err);
      return undefined
    })
  return res
}

// import { getData, getDataWithoutToken } from "../../../Utils/api";
// import { globalConstant } from "../../../Utils/globalConstant";
// import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
// import { MFFeatures } from "../../../Utils/globalTypes";
// import siteConfig from "../../../Utils/siteConfig";
// import { setTokenExpiredStatusAction } from "../../Authentication/actions/auth-actions";
// import { setMutualFundListWrtUserAmountAction } from "../actions/recommendations-action";

// export const invThunk = () => null


// export const getMutualFundListWrtUserAmountThunk = async (amount: number, id: number, initialMFData: MFFeatures) => {
//   let strUrl = siteConfig.RECOMMENDATION_MUTUALFUND_LIST + `?investmenttype_id=${id}&amount=${amount}`;
//   let res: any;
//   await getData(
//     strUrl,
//     siteConfig.CONTENT_TYPE_APPLICATION_JSON,
//     siteConfig.RECOMENDATION_API_ID
//   )
//     .then(res => res.json())
//     .then((data: any) => {
//       res = data;
//     }).catch(err => {
//       console.log(err)
//       return undefined;
//     })

//   return res;
// }

// export const getMasterFundListThunk = async (strUrl: string) => {
//   let res: any;
//   await getDataWithoutToken(
//     strUrl,
//     siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
//     siteConfig.RECOMENDATION_API_ID
//   )
//     .then(res => res.json())
//     .then((data: any) => {
//       res = data;
//     }).catch(err => {
//       console.log(err)
//       return undefined;
//     })

//   return res;
// }

// export const getCategoryGroupListThunk = async () => {
//   let res: any;
//   await getDataWithoutToken(
//     siteConfig.METADATA_CATEGORYGROUP_LIST,
//     siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
//     siteConfig.METADATA_API_ID
//   )
//     .then(res => res.json())
//     .then((data: any) => {
//       res = data;
//     }).catch(err => {
//       console.log(err)
//       return undefined;
//     })

//   return res;
// }
