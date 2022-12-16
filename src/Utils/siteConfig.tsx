import { postData } from "./api";

const siteConfig = Object.freeze({
  // constant key
  BASE_URL: ".execute-api.ap-south-1.amazonaws.com/staging", //staging Development Server
  AUTHENTICATION_API_ID: "k41xvsg1t7",
  METADATA_API_ID: "lzbaatuwc6",
  RECOMENDATION_API_ID: "qsln8zpvn0",
  SAVE_TAX_API_ID: "c4hof2nn6a",
  PAYMENT_API_ID: "e1b9hr3h62",
  INSURANCE_API_ID:"zt6jsx32ja",
  X_API_KEY: "ffuLdSFQZ53751vd0Rrvi3H2im5Tq0oR4CYkNifo",
  CONTENT_TYPE_APPLICATION_JSON: "application/json",
  CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
  ACCESS_TOKEN_KEY: "access_token",


  //API
  AUTHENTICATION_OTP_SEND: "/authentication/otp/send",

  


});

export default siteConfig;



