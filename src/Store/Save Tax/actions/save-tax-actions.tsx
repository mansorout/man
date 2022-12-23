import { 
  SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS,
   SET_SAVE_TAX_INVESTMENT_TYPE_FAILED,
   SET_SAVE_TAX_CALCULATE_SUCCESS,
   SET_SAVE_TAX_CALCULATE_FAILED,
   } from "../constants/save-tax-constants"

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

export const setSaveTaxCalculateOnSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SAVE_TAX_CALCULATE_SUCCESS,
      payload: data
    })
  }
}

export const setSaveTaxCalculateOnFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SAVE_TAX_CALCULATE_FAILED,
      payload: data
    })
  }
}

