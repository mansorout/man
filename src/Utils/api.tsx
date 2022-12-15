// import { Headers } from "node-fetch";
import siteConfig from "./siteConfig";
const strApiKey: string = siteConfig.X_API_KEY;

export async function postData(
  data: any,
  urlPath: string,
  strContentType: string
) {


  const res = await fetch("https://k41xvsg1t7.execute-api.ap-south-1.amazonaws.com/staging/authentication/otp/send", {
  // const res = await fetch(siteConfig.BASE_URL + urlPath, {
  // const res = await fetch(urlPath, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "X-API-Key": siteConfig.X_API_KEY,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Origin: process.env.ORIGIN || "http://localhost:3000",
      authorization:
        "Bearer " + localStorage.getItem(siteConfig.ACCESS_TOKEN_KEY),
    },
    body: JSON.stringify(data),
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

export async function patchData(
  data: any,
  urlPath: string,
  strContentType: string
) {
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
    body: JSON.stringify(data),
  });
  return await res;
}

export async function putData(
  data: any,
  urlPath: string,
  strContentType: string
) {
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
    body: JSON.stringify(data),
  });
  return await res;
}
