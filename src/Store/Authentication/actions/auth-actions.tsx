import { SET_IS_USER_AUTENTICATED, SET_LOGIN_DATA } from "../constants/auth-constants"

export const setloginDataOnSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOGIN_DATA,
      payload: data
    })
  }
}

export const setloginDataOnFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LOGIN_DATA,
      payload: data
    })
  }
}

export const setIsUserAuthenticatedAction = (payload: any) => {
  return { type: SET_IS_USER_AUTENTICATED, payload: payload }
}