import siteConfig from "./siteConfig";

export async function postData(
  data: any,
  urlPath: string,
  strContentType: string
) {
  const res = await fetch(siteConfig.BASE_URL + urlPath, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": strContentType,
      "x-api-key": siteConfig.X_API_KEY,
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
