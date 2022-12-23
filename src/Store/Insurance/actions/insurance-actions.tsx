// export const insuranceAc = () => null
import { SET_TERM_PURCHASE_SUCCESS, SET_TERM_PURCHASE_FAILED } from "../constants/insurance-constants"

export const setTermPurchaseSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_PURCHASE_SUCCESS,
      payload: data
    })
  }
}

export const setTermPurchaseFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_PURCHASE_FAILED,
      payload: data
    })
  }
}