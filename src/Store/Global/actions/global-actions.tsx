import { SET_CITY_LIST, SET_INCOMESLAB_LIST, SET_STATE_LIST, SET__DISABLE_BUTTON, SET__LOADING } from "../constants/global-constants"

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
