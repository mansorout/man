import { postData } from "./api";

const siteConfig = Object.freeze({
  // constant key
  // BASE_URL: "http://15.207.181.111:3000/sprintbeans-auth/mobile/v1", //Development Server
  BASE_URL: "https://e1b9hr3h62.execute-api.ap-south-1.amazonaws.com/staging", //staging Development Server
  ACCESS_TOKEN_KEY: "access_token",
  CONTENT_TYPE_APPLICATION_JSON: "application/json",

  //API
});

export default siteConfig;
