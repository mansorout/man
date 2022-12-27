import {
  SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS,
  SET_SAVE_TAX_INVESTMENT_TYPE_FAILED,
  SET_SAVE_TAX_CALCULATE_SUCCESS,
  SET_SAVE_TAX_CALCULATE_FAILED
} from '../constants/save-tax-constants'


const initialState: any = {
  saveTaxInvestmentTypeData: {},
  saveTaxCalculateApiData: {},
}

const saveTaxReducer = (state = initialState, action: any) => {


  switch (action.type) {
    case SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS: 
      return {
        ...state,
        saveTaxInvestmentTypeData: action.payload
    }
    case SET_SAVE_TAX_INVESTMENT_TYPE_FAILED: 
      return {
        ...state,
        saveTaxInvestmentTypeData: action.payload
    }
    
    case SET_SAVE_TAX_CALCULATE_SUCCESS: 
      return {
        ...state,
        saveTaxCalculateApiData: action.payload
    }
    case SET_SAVE_TAX_CALCULATE_FAILED: 
      return {
        ...state,
        saveTaxCalculateApiData: action.payload
    }
    
  }

  return state
}

export default saveTaxReducer;

