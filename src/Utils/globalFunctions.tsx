import siteConfig from "./siteConfig"

export const getModuleWiseBaseUrl = (strApiId: string) => {
  return `https://${strApiId}${siteConfig.BASE_URL}`;
}

export const checkExpirationOfToken = (code: number) => {
  if (code === 401) return true;
  else return false;
}

export const isMultipleofNumber = (n: number, multipleNum: number) => {
  // while (n > 0)
  //     n = n - multipleNum;

  if (n % multipleNum === 0) {
    return true;
  } else {
    return false;
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