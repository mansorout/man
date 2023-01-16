import { arrKycCompletionKeys, arrProfileCompletion, objUserProfileValidationData } from "./globalConstant";
import { MFFeatures, profileValidationKeys } from "./globalTypes";
import siteConfig from "./siteConfig"

export const getModuleWiseBaseUrl = (strApiId: string) => {
  return `https://${strApiId}${siteConfig.BASE_URL}`;
}

export const checkExpirationOfToken = (code: number) => {
  if (code === 401) return true;
  else return false;
}

export const isMultipleofNumber = (n: number, multipleNum: number) => {
  try {
    if (n % multipleNum === 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

export const getLookUpIdWRTModule = (arrLookupList: any, value: string) => {
  try {
    let id = null;
    if (arrLookupList.length) {
      id = arrLookupList.filter((item: any) => item?.value === value)[0] ? arrLookupList.filter((item: any) => item?.value === value)[0]?.lookup_id : null;
    }
    return id;
  } catch (err) {
    console.log(err);
    return null;
  }
}


export const customParseJSON = (value: string | null) => {
  try {
    let result: any;
    if (!value) return value;
    result = JSON.parse(value);
    return result;
  } catch (error) {
    return value;
  }
}

export const modifyName = (strName: string, cutNameUpto: number) => {
  try {
    let strNewName: string | null = strName.split("")?.splice(0, cutNameUpto)?.join("") + "...";
    if (strNewName) {
      return ", " + strNewName;
    }

    return "";
  } catch (err) {
    console.log(err)
    return "";
  }

}

export const setUserNameAndEmailInLocalStorage = (objUserDetail: any) => {
  try {
    if (objUserDetail?.firstname && objUserDetail?.lastname) {
      let userName: string = `${objUserDetail?.firstname} ${objUserDetail?.middlename ? objUserDetail?.middlename : ""} ${objUserDetail?.lastname}`
      localStorage.setItem(siteConfig.USER_NAME, userName);
    }

    if (objUserDetail?.emailaddress) {
      localStorage.setItem(siteConfig.USER_EMAIL, objUserDetail?.emailaddress);
    }

  } catch (err) {
    console.log(err)
  }
}


export const underAgeValidate = (birthday: string) => {
  try {
    // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
    var optimizedBirthday = birthday.replace(/-/g, "/");

    //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
    var myBirthday: any = new Date(optimizedBirthday);

    // set current day on 01:00:00 hours GMT+0100 (CET)
    var currentDate: any = new Date().toJSON().slice(0, 10) + ' 01:00:00';

    // calculate age comparing current date and borthday
    // @ts-ignore
    var myAge: any = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

    if (myAge < 18) {
      return false;
    } else {
      return true;
    }
  }
  catch (err) {
    console.log(err)
  }
}



export const getMutualFundRecommendationListWRTUserAmount = (arrRecomm: any[], initialMFData: MFFeatures) => {
  try {
    for (let i = 0; i < arrRecomm.length; i++) {
      arrRecomm[i] = {
        ...arrRecomm[i],
        "showButtons": initialMFData?.showButtons,
        "showCheckbox": initialMFData?.showCheckbox,
        "isMutualFundScreen": initialMFData?.isMutualFundScreen,
      }
      if (initialMFData?.isChecked !== undefined) {
        arrRecomm[i]["isChecked"] = initialMFData?.isChecked;
      }
    }

    // console.log(arrRecomm, "arrRecom getMutualFundRecommendationListWRTUserAmount")
    return arrRecomm;
  } catch (err) {
    console.log(err)
    return [];
  }
}

export const validateProfileCompletion = () => {
  try {

    let objUserDetail = customParseJSON(localStorage.getItem(siteConfig.USER_INFO));

    if (!objUserDetail) return objUserProfileValidationData;

    //profile completion
    for (let i = 0; i < arrProfileCompletion.length; i++) {
      if (!objUserDetail?.userdetails[arrProfileCompletion[i]]) {
        objUserProfileValidationData.isProfileComplete = false;
        break;
      }

      objUserProfileValidationData.isProfileComplete = true;
    }

    //kyc completion
    for (let i = 0; i < arrKycCompletionKeys.length; i++) {
      if (!objUserDetail?.kycdetails[arrKycCompletionKeys[i]]) {
        objUserProfileValidationData.isKycCompleted = false;
        break;
      }

      objUserProfileValidationData.isKycCompleted = true;
    }

    if (objUserProfileValidationData.isProfileComplete && objUserProfileValidationData.isKycCompleted) {
      //now check isbseregistered === true or false
      if (objUserDetail?.userdetails?.isbseregistered) {
        objUserProfileValidationData.isBseRegistered = true;
        objUserProfileValidationData.isUserProfileFullCompleted = true;
      } else {
        objUserProfileValidationData.isBseRegistered = false;
      }
    }


    return objUserProfileValidationData;
  } catch (err) {
    console.log(err);
    return objUserProfileValidationData;
  }
}

// {
//   "userdetails": {
//       "customer_id": 137,
//       "firstname": "JASKIRAT",
//       "middlename": "",
//       "lastname": "SINGH",
//       "emailaddress": "jaskirat.singh@okoders.tech",
//       "isemailverified": 0,
//       "mobilenumber": "8368988740",
//       "ismobileverified": 1,
//       "dateofbirth": "07-07-2000",
//       "fk_occupation_id": null,
//       "image": "",
//       "gender": "Male",
//       "height": null,
//       "weight": null,
//       "uniqueid": 531165,
//       "addressline1": "1313",
//       "addressline2": "",
//       "pincode": "121004",
//       "city_id": 115,
//       "city": "FARIDABAD",
//       "state_id": 8,
//       "state": "HARYANA",
//       "country_id": 1,
//       "iscvlverified": 1,
//       "cvlremarks": null,
//       "placeofbirth_id": 87,
//       "placeofbirth": "WEST DELHI",
//       "incomeslab": "> 5 Lacs and <=10 Lacs",
//       "incomecode": 33,
//       "incomeslab_id": 3,
//       "bankname": null,
//       "countryofbirth": "INDIA",
//       "isnetbankingavailable": false,
//       "isbseregistered": true
//   },
//   "kycdetails": {
//       "ispannumberverified": true,
//       "pannumber": "ODLPS9259F",
//       "isnomineedetailsavailable": true,
//       "nomineedetails": {
//           "nominee_name": "jaskirat",
//           "nominee_dob": "25-07-2000",
//           "relation_id": 1,
//           "relation": "homepage"
//       },
//       "isbankdetailsavailable": true,
//       "isbankdetailsverifed": true,
//       "bankdetails": {
//           "accountholdername": true,
//           "accountnumber": true,
//           "ifsc": true,
//           "accounttype": true
//       },
//       "issignatureavailable": true,
//       "ischequeavailable": true,
//       "iscvlverified": true,
//       "cvlremarks": true,
//       "cvlverificationurl": "https://new.camsonline.com/Investors/Transactions/KYC/Paper-less-KYC"
//   },
//   "showprofilecompletion": false,
//   "showholdingdetails": false
// }