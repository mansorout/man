import {
  SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS,
  SET_SAVE_TAX_INVESTMENT_TYPE_FAILED
} from '../constants/save-tax-constants'


const initialState: any = {
  saveTaxINvestmentTypeData: {}
}

const saveTaxReducer = (state = initialState, action: any) => {


  switch (action.type) {
    case SET_SAVE_TAX_INVESTMENT_TYPE_SUCCESS: 
      return {
        ...state,
        saveTaxINvestmentTypeData: action.payload
    }
    case SET_SAVE_TAX_INVESTMENT_TYPE_FAILED: 
      return {
        ...state,
        saveTaxINvestmentTypeData: action.payload
    }
    
  }

  return state
}

export default saveTaxReducer;

