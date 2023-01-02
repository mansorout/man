
import {
  SET_TERM_PURCHASE_SUCCESS,
  SET_TERM_PURCHASE_FAILED,

  SET_ULIP_RETURN_SUCCESS,
  SET_ULIP_RETURN_FAILED,
} from '../constants/insurance-constants'

const initialState: any = {
  termPurchaseData: {},
  ulipReturnApiData: []
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

    case SET_ULIP_RETURN_SUCCESS:
      return {
        ...state,
        ulipReturnApiData: action.payload
      }
    case SET_ULIP_RETURN_FAILED:
      return {
        ...state,
        ulipReturnApiData: action.payload
      }
  }
  return state
}

export default insuranceReducer;



