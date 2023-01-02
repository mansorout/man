// export const insuranceAc = () => null
import {
  SET_TERM_PURCHASE_SUCCESS,
  SET_TERM_PURCHASE_FAILED,
  SET_ULIP_RETURN_SUCCESS,
  SET_ULIP_RETURN_FAILED
} from "../constants/insurance-constants"
import { getUlipReturnApiTypes } from "../constants/types"

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

export const setUlipReturnSuccessAction = (data: getUlipReturnApiTypes[]) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_RETURN_SUCCESS,
      payload: data
    })
  }
}

export const setUlipReturnFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_RETURN_FAILED,
      payload: data
    })
  }
}