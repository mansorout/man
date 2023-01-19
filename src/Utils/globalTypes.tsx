import siteConfig from "./siteConfig";

export const globalTypes = Object.freeze({});

export type MFFeatures = {
  showButtons: boolean, showCheckbox: boolean, isMutualFundScreen: boolean, isChecked?: boolean
}

export type apiResponse = {
  status: boolean,
  code: number,
  error: null,
  data: any
  message: null
}


export type profileValidationKeys = {
  isKycCompleted: boolean,
  isProfileComplete: boolean,
  isBseRegistered: boolean,
  isUserProfileFullCompleted: boolean
}

export type holdingList = {
  fundname: string,
  folio: string,
  fund_id: string,
  investedvalue: number,
  XIRR: string,
  units: string,
  nav: string,
  currentvalue: string,
  absolutereturn: string,
  absolutereturninpercent: string,
  category: string,
  categorygroup: string,
  fundimage: string,
  rating: string,
  navdate: string,
  minredemptionqty: string,
  maxredemptionqty: string,
  minredemptionamount: string,
  maxredemptionamount: string,
  mobileno: string,
  email: string
}

export type transactionList = {
  order_id: string,
  transactiontype_id: string,
  transactiontype: string,
  investmenttype_id: string,
  investmenttype: number,
  totalamount: string,
  orderstatus_id: string,
  orderstatus: string,
  orderitem_id: string,
  fund_id: number,
  fundname: string,
  fundimage: string,
  categorygroup: string,
  category: string,
  ordernumber: number,
  folionumber: string,
  transactiondate: string,
  amount: string,
  units: string,
  ismandateauthenticated: number,
  stoprequestdate: string,
  stopdate: string,
  sipstatus: number,
  nav: string,
  redemptiontype: string
}