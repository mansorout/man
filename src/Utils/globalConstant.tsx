import { profileValidationKeys } from "./globalTypes";

export const globalConstant = Object.freeze({
  SIP_INVESTMENT: "SIP Investment",
  LUMPSUM_INVESTMENT: "Lumpsum Investment",
  ALL_FUNDS: "All",
  EQUITY: "Equity",
  DEBT: "Debt",
  BALANCED: "Balanced",
  ERROR_OCCURRED: "Some error occurred!",
  RECOMMENDATIONS: "recommendations",
  MUTUAL_FUND: "Mutual Fund",
  CEF_ADD_FUND: "Add Funds", //for investment module
  CEF_REPLACE_FUND: "Replace Funds",//for investment module
  CEF_EXPLORE_FUND: "Explore Funds", //for explore fund screen
  CEF_REPLACE_OF_EXPLORE_FUND: "Replace Funds of explore funds",// for redirect to explore fund for replacing funds selected from explore fund modal
  CEF_ADD_FUND_OF_EXPLORE_FUND: "Add Fund of explore funds",
  REMOVE_FUND_STATUS_ID: 2
})

export const moduleList = Object.freeze({
  STARTSIP: "startsip",
  SAVETAX: "savetax",
  INVESTNOW: "investnow",
  GETINSURED: "getinsured",
})

export const defaultListGetInsured = Object.freeze({
  ULIP: "ulip",
  HEALTHINSURANCE: "healthinsurance",
  TERMINSURANCE: "terminsurance",
})

export const lookUpMasterKeys: any = Object.freeze({
  BANNER_SECTION: 'bannersection',
  FINANCIAL_YEAR: 'financialyear',
  HELATH_RECOMMENDATION_TYPE: 'healthrecommendationtype',
  INVESTMENT_TERM: 'investmentterm',
  INVESTMENT_TYPE: 'investmenttype',
  MANDATE_STATUS: 'mandatestatus',
  OCCUPATION: 'occupation',
  ORDER_STATUS: 'orderstatus',
  ORDER_TYPE: 'ordertype',
  RECOMMENDATION_TYPE: 'recommendationtype',
  RELATION_NAME: 'relationname',
  SIP_STOP_REASON: 'sipstopreason',
  STARTING_YEAR: 'startingyear',
  SUM_INSURED: 'suminsured',
  SUPPORT_TOPIC: 'supporttopic',
  TERM_LIFE_COVER: 'termlifecover', // term insurance
  ULIP_FREQUENCY: 'ulip-frequency',
  ULIP_PORT: 'ulip-ppt',
  ULIP_TERM: 'ulip-term', // ulip
});

export const bannerSectionValues = Object.freeze({
  HOME_PAGE: "homepage",
  INVEST_NOW: "investnow",
  BUILD_WEALTH: "buildWealth",
  SAVE_TAX: "savetax",
  INSURANCE_HOME_PAGE: "insurancehomepage",
  HEALTH_INSURANCE: "healthinsurance",
  TERM_INSURANCE: "terminsurance"
})

export const investmentTypeValues = Object.freeze({
  LUMPSUM: "Lumpsum",
  SIP: "SIP"
})

export const paymentMethodKeys = Object.freeze({
  NET_BANKING: "NET_BANKING",
  UPI: "UPI",
  NEFT_RTGS: "NEFT_RTGS"
})

export const paymentMethods = Object.freeze({
  [paymentMethodKeys.NET_BANKING]: {
    index: 0,
    id: 1,
    title: 'Net Banking',
    value: 'net_banking',
  },
  [paymentMethodKeys.UPI]: {
    index: 2,
    id: 2,
    title: 'UPI',
    value: 'upi',
  },
  [paymentMethodKeys.NEFT_RTGS]: {
    index: 1,
    id: 3,
    title: 'NEFT / RTGS',
    value: 'neft',
  },
});

export const enumPaymentModes = Object.freeze({
  NETBANKING: paymentMethods[paymentMethodKeys.NET_BANKING]["id"],
  NEFT: paymentMethods[paymentMethodKeys.NEFT_RTGS]["id"],
  UPI: paymentMethods[paymentMethodKeys.UPI]["id"],
});

export const enumSpecificPurchaseAmount = Object.freeze({
  TEN_THOUSAND: 10000,
  TWO_LACS: 200000
})

export const objUserProfileValidationData: profileValidationKeys = {
  isKycCompleted: false,
  isProfileComplete: false,
  isBseRegistered: false,
  isUserProfileFullCompleted: false
}

// export const arrProfileCompletion = ["mobilenumber", "emailaddress", "dateofbirth", "gender", "addressline1", "state", "city", "pincode", "placeofbirth", "incomeslab"];
export const arrProfileCompletion = ["mobilenumber", "emailaddress", "dateofbirth", "gender", "addressline1", "state", "city", "pincode", "placeofbirthcity", "incomeslab"];
export const arrKycCompletionKeys = ["isnomineedetailsavailable", "iscvlverified", "isbankdetailsverifed", "isbankdetailsverifed"];

export const investmenttypeId = {
  LUMPSUM_ID: 11,
  SIP_ID: 12
}

export const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
});

export const enumActiveGender = {
  NOTHING: 'nothing',
  MALE: 'male',
  FEMALE: 'female',
  TRANS: 'transgender'
}