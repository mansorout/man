import { Dispatch } from 'redux';


const initialState: any = {
    openPin: false,
}

export const PinModalHome = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case "open":
            return {
                // ...state,
                openPin: action.payload
            }

        case "close":
            return {
                // ...state,
                openPin: action.payload,
            }
        default:
            return state
            break;
    }
}

export const PinModalHomeOpenAction = () => async (dispatch: Dispatch<any>) => {
    
    dispatch({
        type: "open",
        payload: true
    });
} 

export const PinModalHomeCloseAction = () => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: "close",
        payload: false
    });
} 