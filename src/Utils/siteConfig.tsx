const siteConfig = Object.freeze({
  /**KEYS*/
  X_API_KEY: "ffuLdSFQZ53751vd0Rrvi3H2im5Tq0oR4CYkNifo",
  GOOGLE_OAUTH_CLIENT_ID: "823267183036-k02hrr39426mgjc3ud146iov09e80dgf.apps.googleusercontent.com",
  
  /**Base URL */
  BASE_URL: ".execute-api.ap-south-1.amazonaws.com/staging", //staging Development Server

  /**Content-types */
  CONTENT_TYPE_APPLICATION_JSON: "application/json",
  CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",

  /**Local storage keys */
  USER_INFO: "user_info",
  USER_NAME: "user_name",
  USER_EMAIL: "user_email",
  ACCESS_TOKEN_KEY: "access_token",
  CONTACT_NUMBER: "contact_number",

  /**API ID's */
  AUTHENTICATION_API_ID: "k41xvsg1t7",
  METADATA_API_ID: "lzbaatuwc6",
  RECOMENDATION_API_ID: "qsln8zpvn0",
  SAVE_TAX_API_ID: "c4hof2nn6a",
  PAYMENT_API_ID: "e1b9hr3h62",
  INSURANCE_API_ID: "zt6jsx32ja",

  /**API'S*/
  //Authentication
  AUTHENTICATION_OTP_SEND: "/authentication/otp/send",
  AUTHENTICATION_OTP_VERIFY: "/authentication/otp/verify",
  AUTHENTICATION_PROFILE_EDIT: "/authentication/profile/edit/",
  AUTHENTICATION_PROFILE_VIEW: "/authentication/profile/view/",

  //Metadata
  METADATA_STATE_LIST: "/metadata/state/list/",
  METADATA_CITY_LIST: "/metadata/city/list",
  METADATA_MODULE_DEFAULTS_LIST :'/metadata/module/defaults/list',
  METADATA_INCOMESLAB_LIST: "/metadata/incomeslab/list/",
  METADATA_LOOKUP_LIST: "/metadata/lookup/list/",
  METADATA_BANNER_LIST: "/metadata/banner/list/",

  //Savtax
  SAVETAX_COMPARISON: "/savetax/comparison",
  SAVETAX_CALCULATE: '/savetax/calculate',
  TERM_PURCHASE: '/insurance/term/purchase/',

  //Recommendations
  RECOMMENDATION_MUTUALFUND_GENERATE: "/recommendation/mutualfund/generate",
  RECOMMENDATION_FUND_LIST: "/recommendation/fund/list/",
});

export default siteConfig;



