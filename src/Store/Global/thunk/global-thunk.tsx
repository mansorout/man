import { getData, getDataWithoutToken, postData } from "../../../Utils/api";
import siteConfig from "../../../Utils/siteConfig";

export const getStateListThunk = async() => {
  let res:any;
    await getDataWithoutToken(
      siteConfig.METADATA_STATE_LIST,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        res = data;
      })
      .catch(err => {
        console.log(err);
      })
  return res;
}

export const getCityListThunk = async(id : any) => {
  let res:any;  
  await getDataWithoutToken(
      siteConfig.METADATA_CITY_LIST + `?state_id=${id}`,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        res = data;
      })
      .catch(err => {
        console.log(err);
      })
  return res;
}

export const getIncomeSlabListThunk = async() => {
    let res:any ;
    await getDataWithoutToken(
      siteConfig.METADATA_INCOMESLAB_LIST,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        res=data;
      })
      .catch(err => {
        console.log(err);
      })
      
  return res;
}

export const getPincodeListThunk = async(strPincode:string)=>{
  let res:any;
  await getData(
    siteConfig.METADATA_PINCODE_LIST + `?search=${strPincode}`,
    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
    siteConfig.METADATA_API_ID
  )
    .then(res => res.json())
    .then((data: any) => {
     res =data;
    })
    .catch(err => {
      console.log(err);
    })

    return res;
}

export const getDefaultList = async(strUrl:string)=>{
  let res :any;

  await getDataWithoutToken(
    strUrl,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
    siteConfig.METADATA_API_ID,
    ).then((res) => res.json()).then((data) => {
      res = data;
    }).catch((error) => {
      console.log(error);
    })

  return res;
}

export const setUploadImageThunk = async (ImageData:any) => {
  let res: any;
  
  await postData(
    ImageData,
    siteConfig.METADATA_UPLOAD_IMAGE,
    siteConfig.CONTENT_TYPE_APPLICATION_JSON,
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



// import { getDataWithoutToken } from "../../../Utils/api";
// import { checkExpirationOfToken } from "../../../Utils/globalFunctions";
// import siteConfig from "../../../Utils/siteConfig";
// import { setTokenExpiredStatusAction } from "../../Authentication/actions/auth-actions";
// import { getCityListAction, getIncomeSlabListAction, getStateListAction } from "../actions/global-actions";

// export const getStateListThunk = () => {
//   return (dispatch: any) => {
//     getDataWithoutToken(
//       siteConfig.METADATA_STATE_LIST,
//       siteConfig.CONTENT_TYPE_APPLICATION_JSON,
//       siteConfig.METADATA_API_ID,
//     )
//       .then(res => res.json())
//       .then((data: any) => {
//         if (checkExpirationOfToken(data?.code)) {
//           dispatch(setTokenExpiredStatusAction(true));
//           return;
//         }

//         if (data?.error) {
//           console.log("error ocuured")
//           return;
//         }

//         dispatch(getStateListAction(data?.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// }

// export const getCityListThunk = ({ id }: any) => {
//   return (dispatch: any) => {
//     getDataWithoutToken(
//       siteConfig.METADATA_CITY_LIST + `?state_id=${id}`,
//       siteConfig.CONTENT_TYPE_APPLICATION_JSON,
//       siteConfig.METADATA_API_ID,
//     )
//       .then(res => res.json())
//       .then((data: any) => {
//         if (checkExpirationOfToken(data?.code)) {
//           dispatch(setTokenExpiredStatusAction(true));
//           return;
//         }

//         if (data?.error) {
//           console.log("error ocuured")
//           return;
//         }

//         dispatch(getCityListAction(data?.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// }

// export const getIncomeSlabListThunk = () => {
//   return (dispatch: any) => {
//     getDataWithoutToken(
//       siteConfig.METADATA_INCOMESLAB_LIST,
//       siteConfig.CONTENT_TYPE_APPLICATION_JSON,
//       siteConfig.METADATA_API_ID,
//     )
//       .then(res => res.json())
//       .then((data: any) => {
//         if (checkExpirationOfToken(data?.code)) {
//           dispatch(setTokenExpiredStatusAction(true));
//           return;
//         }

//         if (data?.error) {
//           console.log("error ocuured")
//           return;
//         }
        
//         dispatch(getIncomeSlabListAction(data?.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// }


