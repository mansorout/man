
import {
  SET_TERM_PURCHASE_SUCCESS,
  SET_TERM_PURCHASE_FAILED
} from '../constants/insurance-constants'

const initialState: any = {
  termPurchaseData: {}
}

const insuranceReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case SET_TERM_PURCHASE_SUCCESS:
      return {
        ...state,
        termPurchaseData: action.payload
      }
    case SET_TERM_PURCHASE_FAILED:
      return {
        ...state,
        termPurchaseData: action.payload
      }
  }
  return state
}

export default insuranceReducer;



