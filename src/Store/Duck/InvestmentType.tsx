import { Dispatch } from 'redux';
// import { number } from 'yargs';

export const LUMPSUM = 'LUMPSUM';
export const MONTHLY = 'MONTHLY';
export const ULIP_LUMPSUM = 'ULIP_LUMPSUM';
export const ULIP_MONTHLY = 'ULIP_MONTHLY';
export const ULIP_INSURANCE_AMOUNT = 'ULIP_INSURANCE_AMOUNT';
export const INVESTMENT_AMOUNT = 'INVESTMENT_AMOUNT';
export const SAVETAX_PERCENTAGE_AMOUNT = 'SAVETAX_PERCENTAGE_AMOUNT';

const initialState: any = {
    // saveTax 
    investmentType: '',
    investmentAmount: '0',
    savetaxPercentageAmount: 0,

    // insurance ulip
    ulipInsuranceType: '',
    ulipInsuranceAmount: '0',
}

export const InvestmentTypeReducers = (state: any = initialState, action: any): any => {
    switch (action.type) {

        // SAVETAX
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
        case SAVETAX_PERCENTAGE_AMOUNT:
            return {
                ...state,
                savetaxPercentageAmount: action.payload,
            }

        // ULIP
        case ULIP_LUMPSUM:
            return {
                ...state,
                ulipInsuranceType: action.payload
            }
        case ULIP_MONTHLY:
            return {
                ...state,
                ulipInsuranceType: action.payload,
            }
        case ULIP_INSURANCE_AMOUNT:
            return {
                ...state,
                ulipInsuranceAmount: action.payload,
            }

        default:
            return state
            break;
    }
}

// saveTax
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


export const SaveTaxInvestmentAmount = (props: any) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: INVESTMENT_AMOUNT,
        payload: props
    });
}


export const saveTaxPercentageAmountAction = (props: number) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: SAVETAX_PERCENTAGE_AMOUNT,
        payload: props
    });
} 

// insurance ULIP
export const insuranceUlipLumpsumAction = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: ULIP_LUMPSUM,
        payload: props
    });
}

export const insuranceUlipMonthlyAction = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: ULIP_MONTHLY,
        payload: props
    });
}

export const insuranceUlipAmount = (props: string) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: ULIP_INSURANCE_AMOUNT,
        payload: props
    });
}