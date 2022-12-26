import { Dispatch } from 'redux';
// import { number } from 'yargs';

export const LUMPSUM = 'LUMPSUM';
export const MONTHLY = 'MONTHLY';
export const INVESTMENT_AMOUNT = 'INVESTMENT_AMOUNT';

const initialState: any = {
    investmentType: '',
    investmentAmount: '0'
}

export const SaveTaxInvestmentTypeReducers = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case LUMPSUM:
            return {
                ...state,
                investmentType: action.payload
            }

        case MONTHLY:
            return {
                ...state,
                investmentType: action.payload,
            }
        case INVESTMENT_AMOUNT:
            return {
                ...state,
                investmentAmount: action.payload,
            }
        default:
            return state
            break;
    }
}

export const SaveTaxInvestmentLumpsumAction = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: LUMPSUM,
        payload: props
    });
}

export const SaveTaxInvestmentMonthlyAction = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: MONTHLY,
        payload: props
    });
}


export const SaveTaxInvestmentAmount = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: INVESTMENT_AMOUNT,
        payload: props
    });
} 