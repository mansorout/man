import { SET_LOGIN_DATA } from "../constants/auth-constants"

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
