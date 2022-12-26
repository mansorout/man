import { SET__DISABLE_BUTTON, SET__LOADING } from "../constants/global-constants"

export const setDisableButtonAction = (data: any) => {
    return { type: SET__DISABLE_BUTTON, payload: data }
}

export const setLoadingAction = (data: any) => {
    return { type: SET__LOADING, payload: data }
}