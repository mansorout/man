import { postData } from "./api";

const siteConfig = Object.freeze({
  // constant key
  BASE_URL: "https://www.dummy.com", //Development Server
  // BASE_URL: "https://", //Development Server
  ACCESS_TOKEN_KEY: "access_token",
  CONTENT_TYPE_APPLICATION_JSON: "application/json",

  //API
  LOGIN: "/auth/login",
});

export default siteConfig;
