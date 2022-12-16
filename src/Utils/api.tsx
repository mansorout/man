import { getModuleWiseBaseUrl } from "./globalFunctions";
import siteConfig from "./siteConfig";
const strApiKey: string = siteConfig.X_API_KEY;

const getEncodedData = (objdata: any) => {
  let formBody: any = [];
  for (let property in objdata) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(objdata[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return formBody;
}

export async function postData(data: any, urlPath: string, strContentType: string, strApiId: string) {

  let objBody: any;
  if (strContentType === siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) {
    objBody = getEncodedData(data);
  } else {
    objBody = JSON.stringify(data);
  }

  const res = await fetch(getModuleWiseBaseUrl(strApiId) + urlPath, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "X-API-Key": strApiKey,
      Origin: process.env.ORIGIN || "http://localhost:3000",
      authorization:
        "Bearer " + localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY),
    },
    body: objBody,
  });

  return await res;
}

export async function getData(urlPath: string, strContentType: string) {

  const res = await fetch(siteConfig.BASE_URL + urlPath, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "x-api-key": siteConfig.X_API_KEY,
      Origin: "http://localhost:3000",
      authorization:
        "Bearer " + localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY),
    },
  });
  return await res;
}

export async function patchData(data: any, urlPath: string, strContentType: string) {
  let objBody: any;
  if (strContentType === siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) {
    objBody = getEncodedData(data);
  } else {
    objBody = JSON.stringify(data);
  }

  const res = await fetch(siteConfig.BASE_URL + urlPath, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "x-api-key": siteConfig.X_API_KEY,
      Origin: "http://localhost:3000",
      authorization:
        "Bearer " + localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY),
    },
    body: objBody,
  });
  return await res;
}

export async function putData(data: any, urlPath: string, strContentType: string) {
  let objBody: any;
  if (strContentType === siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) {
    objBody = getEncodedData(data);
  } else {
    objBody = JSON.stringify(data);
  }

  const res = await fetch(siteConfig.BASE_URL + urlPath, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "x-api-key": siteConfig.X_API_KEY,
      Origin: "http://localhost:3000",
      authorization:
        "Bearer " + localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY),
    },
    body: objBody,
  });
  return await res;
}
