import { Dispatch } from 'redux';


const initialState: any = {
    ULIPId: [],
}

export const ULIPCompare = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case "add":{
            return {
                // ...state,
                ULIPId : [...state.ULIPId, action.payload]
            }
        }

        case "remove":
            return {
                // ...state,
                ULIPId : state.ULIPId.filter((item:any) => item !== action.payload)
            }
        default:
            return state
    }
}

export const ULIPCompareAddId = (id:number) => async (dispatch: Dispatch<any>) => {
    
    dispatch({
        type: "add",
        payload: id
    });
} 

export const ULIPCompareRemoveId = (id:number) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: "remove",
        payload: id
    });
} 