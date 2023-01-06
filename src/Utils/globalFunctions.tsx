import { MFFeatures } from "./globalTypes";
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
        "isMutualFundScreen": initialMFData?.isMutualFundScreen
      }
    }

    return arrRecomm;
  } catch (err) {
    return [];
    console.log(err)
  }
}