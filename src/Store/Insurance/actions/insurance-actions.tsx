
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
} from "../constants/insurance-constants"

import {
  getUlipReturnApiTypes,
  listApiTypes,
  getUlipListApiTypes,
  getUlipSchemeDetailApiTypes,
  postTermPurchaseProps
} from "../constants/types"


export const setTermDataSuccessAction = (data: postTermPurchaseProps) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_DATA_SUCCESS,
      payload: data
    })
  }
}

export const setTermDataFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_DATA_FAILED,
      payload: data
    })
  }
}


export const setTermGenerateSuccessAction = (data: postTermPurchaseProps) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_GENERATE_SUCCESS,
      payload: data
    })
  }
}

export const setTermGenerateFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_GENERATE_FAILED,
      payload: data
    })
  }
}

export const setTermListSuccessAction = (data: listApiTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_LIST_SUCCESS,
      payload: data
    })
  }
}

export const setTermListFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TERM_LIST_FAILED,
      payload: data
    })
  }
}

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

export const setUlipGenrateSuccessAction = (data: listApiTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_GENERATE_SUCCESS,
      payload: data
    })
  }
}

export const setUlipGenrateFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_GENERATE_FAILED,
      payload: data
    })
  }
}

export const setUlipListSuccessAction = (data: getUlipListApiTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_LIST_SUCCESS,
      payload: data
    })
  }
}

export const setUlipListFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_LIST_FAILED,
      payload: data
    })
  }
}

export const setUlipSchemeDetailSuccessAction = (data: getUlipSchemeDetailApiTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_SCHEME_DETAIL_SUCCESS,
      payload: data
    })
  }
}

export const setUlipSchemeDetailFailAction = (data: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ULIP_SCHEME_DETAIL_FAILED,
      payload: data
    })
  }
}