import { postData } from "./api";

const siteConfig = Object.freeze({
  // constant key
  // BASE_URL: "https://e1b9hr3h62.execute-api.ap-south-1.amazonaws.com/staging", //staging Development Server
  BASE_URL: "https://k41xvsg1t7.execute-api.ap-south-1.amazonaws.com/staging", //staging Development Server
  X_API_KEY: "ffuLdSFQZ53751vd0Rrvi3H2im5Tq0oR4CYkNifo",
  CONTENT_TYPE_APPLICATION_JSON: "application/json",
  ACCESS_TOKEN_KEY: "access_token",

  //API
  AUTHENTICATION_OTP_SEND: "/authentication/otp/send/",
});

export default siteConfig;
