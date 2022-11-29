import { Dispatch } from 'redux';


const GET_NAV_TOGGLE_REQUEST = "GET_NAV_TOGGLE_REQUEST"
const GET_NAV_TOGGLE_SUCCESS = "GET_NAV_TOGGLE_SUCCESS"
const GET_NAV_TOGGLE_FAILD = "GET_NAV_TOGGLE_FAILD"


const initialState: any = {
    loading: false,
    toggleState: false,
}

export const NavToggleReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case GET_NAV_TOGGLE_REQUEST:
            return {
                // ...state,
                loading: true
            }

        case GET_NAV_TOGGLE_SUCCESS:
            return {
                // ...state,
                loading: false,
                toggleState: action.payload,
            }

        case GET_NAV_TOGGLE_FAILD:
            return {
                // ...state,
                loading: false,
                // error: action.payload
            }

        default:
            return state
            break;
    }
}

export const NavToggleAction = (props: boolean) => async (dispatch: Dispatch<any>) => {

    // dispatch({
    //     type: GET_NAV_TOGGLE_REQUEST,
    // });
    // debugger
    dispatch({
        type: GET_NAV_TOGGLE_SUCCESS,
        payload: props
    });
} 