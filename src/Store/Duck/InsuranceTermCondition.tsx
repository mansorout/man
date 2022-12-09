import { Dispatch } from 'redux';


const GET_INSURANCE_TERM_CONDITION_REQUEST = "GET_INSURANCE_TERM_CONDITION_REQUEST"
const GET_INSURANCE_TERM_CONDITION_SUCCESS = "GET_INSURANCE_TERM_CONDITION_SUCCESS"
const GET_INSURANCE_TERM_CONDITION_FAILD = "GET_INSURANCE_TERM_CONDITION_FAILD"

const initialState: any = {
    loading: false,
    insuranceTermConditionState: false,
}

export const InsuranceTermConditionReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case GET_INSURANCE_TERM_CONDITION_REQUEST:
            return {
                loading: true
            }

        case GET_INSURANCE_TERM_CONDITION_SUCCESS:
            return {
                loading: false,
                insuranceTermConditionState: action.payload,
            }

        case GET_INSURANCE_TERM_CONDITION_FAILD:
            return {
                loading: false,
            }

        default:
            return state
            break;
    }
}

export const InsuranceTermConditionAction = (props: boolean) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: GET_INSURANCE_TERM_CONDITION_SUCCESS,
        payload: props
    });
} 
