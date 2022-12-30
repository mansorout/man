import { 
  SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS,
   SET_SAVE_TAX_INVESTMENT_TYPE_FAILED,
   SET_SAVE_TAX_CALCULATE_SUCCESS,
   SET_SAVE_TAX_CALCULATE_FAILED,
   SET_MODULE_DEFAULT_LIST_SUCCESS,
   SET_MODULE_DEFAULT_LIST_FAILED
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


export const setModuleDefaultListSuccessAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_MODULE_DEFAULT_LIST_SUCCESS,
      payload: data
    })
  }
}

export const setModuleDefaultListFailAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_MODULE_DEFAULT_LIST_FAILED,
      payload: data
    })
  }
}

