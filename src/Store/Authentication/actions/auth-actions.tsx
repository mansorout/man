import { profileValidationKeys } from "../../../Utils/globalTypes"
import {
  SET_IS_REDEEM_VERIFIED,
  SET_IS_REDEEM_VERIFIED_ERROR,
  SET_IS_USER_AUTENTICATED,
  SET_LOGIN_DATA_ON_FAILED,
  SET_LOGIN_DATA_ON_SUCCESS,
  SET_TOKEN_EXPIRED_STATUS,
  SET_USER_PROFILE_VALIDATION_KEYS,
  SET_USER_VIEW_PROFILE_DATA
} from "../constants/auth-constants"

export const setloginDataOnSuccessAction = (data: any) => {
  return { type: SET_LOGIN_DATA_ON_SUCCESS, payload: data }
}

export const setloginDataOnFailAction = (data: any) => {
  return { type: SET_LOGIN_DATA_ON_FAILED, payload: data }
}

export const setIsUserAuthenticatedAction = (payload: any) => {
  return { type: SET_IS_USER_AUTENTICATED, payload: payload }
}

export const setUserViewProfileDataAction = (payload: any) => {
  return { type: SET_USER_VIEW_PROFILE_DATA, data: payload }
}

export const setTokenExpiredStatusAction = (payload: any) => {
  return { type: SET_TOKEN_EXPIRED_STATUS, payload: payload }
}

export const setUserProfileValidationKeys = (data: profileValidationKeys) => {
  return { type: SET_USER_PROFILE_VALIDATION_KEYS, payload: data }
}

export const setIsRedeemVerifiedAction = (data: any) => {
  return { type: SET_IS_REDEEM_VERIFIED, payload: data }
}

export const setIsRedeemVerifiedErrorAction = (data: any) => {
  return { type: SET_IS_REDEEM_VERIFIED_ERROR, payload: data }
}