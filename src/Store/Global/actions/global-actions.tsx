import { SET__DISABLE_BUTTON } from "../constants/global-constants"

export const setDisableButtonAction = (data: any) => {
    return { type: SET__DISABLE_BUTTON, payload: data }
}