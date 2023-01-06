
import {
  SET_TERM_DATA_SUCCESS,
  SET_TERM_DATA_FAILED,
  SET_TERM_GENERATE_SUCCESS,
  SET_TERM_GENERATE_FAILED,
  SET_TERM_LIST_SUCCESS,
  SET_TERM_LIST_FAILED,
  SET_TERM_PURCHASE_SUCCESS,
  SET_TERM_PURCHASE_FAILED,
  SET_ULIP_RETURN_SUCCESS,
  SET_ULIP_RETURN_FAILED,
  SET_ULIP_GENERATE_SUCCESS,
  SET_ULIP_GENERATE_FAILED,
  SET_ULIP_LIST_SUCCESS,
  SET_ULIP_LIST_FAILED,
  SET_ULIP_SCHEME_DETAIL_SUCCESS,
  SET_ULIP_SCHEME_DETAIL_FAILED
} from '../constants/insurance-constants'

const initialState: any = {
  termData: {},
  termGenerateApiData: {},
  termListApiData: {},
  termPurchaseData: {},
  ulipReturnApiData: [],
  ulipGenrateApiData: {},
  ulipListApiData: {},
  ulipSchemeDetail: {},
}

const insuranceReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case SET_TERM_DATA_SUCCESS:
      return {
        ...state,
        termData: action.payload
      }
    case SET_TERM_DATA_FAILED:
      return {
        ...state,
        termData: action.payload
      }

    case SET_TERM_GENERATE_SUCCESS:
      return {
        ...state,
        termGenerateApiData: action.payload
      }
    case SET_TERM_GENERATE_FAILED:
      return {
        ...state,
        termGenerateApiData: action.payload
      }

      case SET_TERM_LIST_SUCCESS:
        return {
          ...state,
          termListApiData: action.payload
        }
      case SET_TERM_LIST_FAILED:
        return {
          ...state,
          termListApiData: action.payload
        }
  

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

    case SET_ULIP_GENERATE_SUCCESS:
      return {
        ...state,
        ulipGenrateApiData: action.payload
      }
    case SET_ULIP_GENERATE_FAILED:
      return {
        ...state,
        ulipGenrateApiData: action.payload
      }
      
    case SET_ULIP_LIST_SUCCESS:
      return {
        ...state,
        ulipListApiData: action.payload
      }
    case SET_ULIP_LIST_FAILED:
      return {
        ...state,
        ulipListApiData: action.payload
      }
      
    case SET_ULIP_SCHEME_DETAIL_SUCCESS:
      return {
        ...state,
        ulipSchemeDetail: action.payload
      }
    case SET_ULIP_SCHEME_DETAIL_FAILED:
      return {
        ...state,
        ulipSchemeDetail: action.payload
      }
  }
  return state
}

export default insuranceReducer;



