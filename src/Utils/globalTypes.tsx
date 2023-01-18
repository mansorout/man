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