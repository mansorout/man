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
  INVESTMENT_CARD_TYPE: "investment_card_type",
  INVESTMENT_USER_AMOUNT: "investment_user_amount",
  SIP_CARD_TYPE: "sip_card_type",
  SIP_USER_AMOUNT: "sip_user_amount",
  MODULE_LIST: "module_list",
  SAVE_TAX_LUMPSUM_AMOUNT: "save_tax_lumpsum_amount",
  SAVE_TAX_MONTHLY_INVESTMENT: "save_tax_monthly_investment",
  SAVE_TAX_INVESTMENT_TYPE: "save_tax_investment_type",

  /**API ID's */
  AUTHENTICATION_API_ID: "k41xvsg1t7",
  METADATA_API_ID: "lzbaatuwc6",
  RECOMENDATION_API_ID: "qsln8zpvn0",
  SAVE_TAX_API_ID: "c4hof2nn6a",
  PAYMENT_API_ID: "e1b9hr3h62",
  INSURANCE_API_ID: "zt6jsx32ja",

  /**API'S*/
  //Authentication
  AUTHENTICATION_INTRO_LIST: "/authentication/intro/list",
  AUTHENTICATION_TOKEN_REFRESH: "/authentication/token/refresh",//new
  AUTHENTICATION_OTP_SEND: "/authentication/otp/send",
  AUTHENTICATION_OTP_VERIFY: "/authentication/otp/verify",
  AUTHENTICATION_PROFILE_EDIT: "/authentication/profile/edit/",
  AUTHENTICATION_PROFILE_VIEW: "/authentication/profile/view/",
  AUTHENTICATION_PAN_VERIFICATION: "/authentication/pan/verification/",
  AUTHENTICATION_NOMINEE_ADD: "/authentication/nominee/add/",
  AUTHENTICATION_BANK_ADD: "/authentication/bank/add/",
  AUTHENTICATION_SIGNATURE_ADD: "/authentication/signature/add/",
  AUTHENTICATION_CHEQUE_ADD: "/authentication/cheque/add/",
  AUTHENTICATION_SIGNATURE_VIEW: "/authentication/signature/view/",
  AUTHENTICATION_IFSC_DETAILS: "/authentication/ifsc/details",//new
  AUTHENTICATION_CHEQUE_VIEW: "/authentication/cheque/view",//new
  AUTHENTICATION_CVL_STATUS: "/authentication/cvl/status",//new
  AUTHENTICATION_MEMBER_ADD: "/authentication/member/add",//new
  AUTHENTICATION_MEMBER_LIST: "/authentication/member/list",//new
  AUTHENTICATION_MEMBER_UPDATE: "/authentication/member/update",//new

  //Metadata
  METADATA_STATE_LIST: "/metadata/state/list/",
  METADATA_CITY_LIST: "/metadata/city/list",
  METADATA_MODULE_DEFAULTS_LIST: "/metadata/module/defaults/list",
  METADATA_INCOMESLAB_LIST: "/metadata/incomeslab/list/",
  METADATA_LOOKUP_LIST: "/metadata/lookup/list/",
  METADATA_BANNER_LIST: "/metadata/banner/list/",
  METADATA_PINCODE_LIST: "/metadata/pincode/list/",
  METADATA_CATEGORYGROUP_LIST: "/metadata/categorygroup/list/",
  METADATA_MODULE_CONTENT_LIST: "/metadata/module/content/list",//new
  METADATA_MODULE_LIST: "/metadata/module/list", //new
  METADATA_UPLOAD_IMAGE: "/metadata/upload/image", //new
  METADATA_BSENEFT_LIST: "/metadata/bseneft/list", //new
  METADATA_FAMILYRELATION_LIST: "/metadata/familyrelation/list", //new
  METADATA_SUPPORT_REQUEST_ADD: "/metadata/support/request/add", //new

  //Recommendations
  RECOMMENDATION_MUTUALFUND_GENERATE: "/recommendation/mutualfund/generate",
  RECOMMENDATION_MUTUALFUND_LIST: "/recommendation/mutualfund/list/",
  RECOMMENDATION_MUTUALFUND_ADD: "/recommendation/mutualfund/add", //new
  RECOMMENDATION_MUTUALFUND_UPDATE: "/recommendation/mutualfund/update/",
  RECOMMENDATION_MUTUALFUND_COMPARISON: "/recommendation/mutualfund/comparison", //new
  RECOMMENDATION_FUND_LIST: "/recommendation/fund/list/",
  RECOMMENDATION_FUND_RETURN: "/recommendation/fund/return/",
  RECOMMENDATION_FUND_DETAIL: "/recommendation/fund/detail",
  RECOMMENDATION_FUND_PROVIDER_LIST: "/recommendation/fund/provider/list",
  RECOMMENDTAION_FUND_NAV_DETAIL: "/recommendation/fund/nav/detail",
  RECOMMENDATION_SAVETAX_GENERATE: "/recommendation/savetax/generate",
  RECOMMENDATION_SAVETAX_LIST: "/recommendation/savetax/list",
  RECOMMENDATION_ULIP_GENERATE: "/recommendation/ulip/generate/",
  RECOMMENDATION_ULIP_LIST: "/recommendation/ulip/list",
  RECOMMENDATION_TERM_GENERATE: "/recommendation/term/generate",
  RECOMMENDATION_TERM_LIST: "/recommendation/term/list",
  RECOMMENDATION_HEALTH_GENERATE: "/recommendation/health/generate",//new
  RECOMMENDATION_HEALTH_LIST: "/recommendation/health/list",//new
  RECOMMENDATION_HEALTH_UPDATE: "/recommendation/health/update",//new

  // Insurance
  INSURANCE_ULIP_RETURN: "/insurance/ulip/returns",
  INSURANCE_ULIP_SCHEME_DETAIL: "/insurance/ulip/scheme/detail",
  INSURANCE_ULIP_QUOTE_GENERATE: "/insurance/ulip/quote/generate",//new
  INSURANCE_ULIP_SUMASSURED: "/insurance/ulip/sumassured",//new
  INSURANCE_HEALTH_SUMINSURED_LIST: "/insurance/health/suminsured/list",//new
  INSURANCE_HEALTH_PLAN_DETAIL: "/insurance/health/plan/detail",//new
  INSURANCE_HEALTH_POLICY_GENARATION: "/insurance/health/policy/generation",//new
  INSURANCE_HEALTH_POLICY_GENARATION_TOPUP: "/insurance/health/policy/generation/topup",//new
  INSURANCE_HEALTH_POLICY_UPDATE: "/insurance/health/policy/update",//new
  INSURANCE_HEALTH_MAXAGE: "/insurance/health/maxage",//new
  INSURANCE_TERM_PURCHASE: "/insurance/term/purchase",//new
  INSURANCE_PORTFOLIO_LIST: "/insurance/portfolio/list",//new

  //Savtax
  SAVETAX_CALCULATE: "/savetax/calculate",//new 
  SAVETAX_COMPARISON: "/savetax/comparison",//new

  // Payment
  PAYMENT_BSE_REGISTER: "/payment/bse/register", //new
  PAYMENT_PORTOFOLIO_LIST: "/payment/portfolio/list",//new
  PAYMENT_ORDER_SIP_CANCEL: "/payment/order/sip/cancel",//new
  PAYMENT_ORDER_LUMPSUM: "/payment/order/lumpsum",//new
  PAYMENT_ORDER_SIP: "/payment/order/sip",//new
  PAYMENT_ORDER_REDEEM: "/payment/order/redeem",//new
  PAYMENT_TRANSACTION_LIST: "/payment/transaction/list",//new
  PAYMENT_PAYMENT: "/payment/payment",//new
  PAYMENT_PAYMENT_STATUS: "/payment/payment/status",//new
  PAYMENT_MANDATE_AUTH: "/payment/mandate/auth",//new
  PAYMENT_MANDATE_STATUS: "/payment/mandate/status",//new
  PAYMENT_REPORT_PORTFOLIO: "/payment/report/portfolio",//new
  PAYMENT_REPORT_CAPITALGAIN: "/payment/report/capitalgain",//new
  PAYMENT_REPORT_TRANSACTION: "/payment/report/transaction"//new
})

export default siteConfig





/** -------DONT ADD ANY DATA IN BELOW OBJECT------- */
const siteConfigOld = Object.freeze({
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
  INVESTMENT_CARD_TYPE: "investment_card_type",
  INVESTMENT_USER_AMOUNT: "investment_user_amount",

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
  AUTHENTICATION_UPLOAD_IMAGE: "/metadata/upload/image/",


  //Metadata
  METADATA_STATE_LIST: "/metadata/state/list/",
  METADATA_CITY_LIST: "/metadata/city/list",
  METADATA_MODULE_DEFAULTS_LIST: '/metadata/module/defaults/list',
  METADATA_INCOMESLAB_LIST: "/metadata/incomeslab/list/",
  METADATA_LOOKUP_LIST: "/metadata/lookup/list/",
  METADATA_BANNER_LIST: "/metadata/banner/list/",
  METADATA_PINCODE_LIST: "/metadata/pincode/list/",
  METADATA_CATEGORYGROUP_LIST: "/metadata/categorygroup/list/",

  //Savtax
  SAVETAX_COMPARISON: "/savetax/comparison",
  SAVETAX_CALCULATE: '/savetax/calculate',
  TERM_PURCHASE: '/insurance/term/purchase/',

  // Kyc update 
  AUTHENTICATION_PAN_VERIFICATION: "/authentication/pan/verification/",
  AUTHENTICATION_NOMINEE_ADD: "/authentication/nominee/add/",
  AUTHENTICATION_BANK_ADD: "/authentication/bank/add/",
  AUTHENTICATION_SIGNATURE_ADD: "/authentication/signature/add/",
  AUTHENTICATION_CHEQUE_ADD: "/authentication/cheque/add/",
  AUTHENTICATION_SIGNATURE_VIEW: "/authentication/signature/view/",



  //Recommendations
  RECOMMENDATION_MUTUALFUND_GENERATE: "/recommendation/mutualfund/generate",
  RECOMMENDATION_MUTUALFUND_LIST: "/recommendation/mutualfund/list/",
  RECOMMENDATION_MUTUALFUND_UPDATE: "/recommendation/mutualfund/update/",
  RECOMMENDATION_FUND_LIST: "/recommendation/fund/list/",
  RECOMMENDATION_FUND_RETURN: "/recommendation/fund/return/",
  RECOMMENDATION_FUND_DETAIL: '/recommendation/fund/detail',
  RECOMMENDTAION_FUND_NAV_DETAIL: '/recommendation/fund/nav/detail',
  RECOMMENDATION_SAVETAX_GENERATE: '/recommendation/savetax/generate',
  RECOMMENDATION_SAVETAX_LIST: '/recommendation/savetax/list',
  RECOMMENDATION_ULIP_GENERATE: '/recommendation/ulip/generate/',
  RECOMMENDATION_ULIP_LIST: '/recommendation/ulip/list',
  RECOMMENDATION_TERM_GENERATE: '/recommendation/term/generate',
  RECOMMENDATION_TERM_LIST: '/recommendation/term/list',

  // Insurance
  INSURANCE_ULIP_RETURN: '/insurance/ulip/returns',
  INSURANCE_ULIP_SCHEME_DETAIL: '/insurance/ulip/scheme/detail',

});



