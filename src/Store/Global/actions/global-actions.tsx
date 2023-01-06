import { SET_BANNER_LIST_DATA, SET_CITY_LIST, SET_INCOMESLAB_LIST, SET_STATE_LIST, SET__DISABLE_BUTTON, SET__LOADING ,SET_COMMON_MSG,SET_MASTER_FUND_LIST  } from "../constants/global-constants"

export const setDisableButtonAction = (data: any) => {
    return { type: SET__DISABLE_BUTTON, payload: data }
}

export const setLoadingAction = (data: any) => {
    return { type: SET__LOADING, payload: data }
}

export const getStateListAction = (data: any) => {
    return { type: SET_STATE_LIST, payload: data }
}

export const getCityListAction = (data: any) => {
    return { type: SET_CITY_LIST, payload: data }
}

export const getIncomeSlabListAction = (data: any) => {
    return { type: SET_INCOMESLAB_LIST, payload: data }
}

export const setBannerSectionListAction = (data: any) => {
    return { type: SET_BANNER_LIST_DATA, payload: data }
}

export const getCommonApiMsg =(data: any)=>{
    return { type: SET_COMMON_MSG, payload: data }
}
export const setMasterFundListAction =(data: any)=>{
    return { type: SET_MASTER_FUND_LIST , payload: data }
}


