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