import { SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS, SET_SAVE_TAX_INVESTMENT_TYPE_FAILED } from "../constants/save-tax-constants"

export const setSaveTaxInvestmentTypeOnSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS,
      payload: data
    })
  }
}

export const setSaveTaxInvestmentTypeOnFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SAVE_TAX_INVESTMENT_TYPE_FAILED,
      payload: data
    })
  }
}