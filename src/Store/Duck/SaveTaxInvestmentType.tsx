import { Dispatch } from 'redux';

const LUMPSUM = 'LUMPSUM';
const MONTHLY = 'MONTHLY';

const initialState: any = {
    investmentType: '',
}

export const SaveTaxInvestmentTypeReducers = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case LUMPSUM:
            return {
                // ...state,
                investmentType: action.payload
            }

        case MONTHLY:
            return {
                // ...state,
                investmentType: action.payload,
            }
        default:
            return state
            break;
    }
}

export const SaveTaxInvestmentLumpsumAction = (props:string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: LUMPSUM,
        payload: props
    });
} 

export const SaveTaxInvestmentMonthlyAction = (props:string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: MONTHLY,
        payload: props
    });
} 