import { Dispatch } from 'redux';


const initialState: any = {
    Anchor: null,
}

export const FilterBox = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case "open":
            return {
                // ...state,
                Anchor : action.payload
            }

        case "close":
            return {
                // ...state,
                Anchor: action.payload,
            }
        default:
            return state
            break;
    }
}

export const AnchorOpenAction = (event: React.MouseEvent<Element, MouseEvent>) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: "open",
        payload: event.currentTarget
    });
} 

export const AnchorCloseAction = () => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: "close",
        payload: null
    });
} 