import { SET_INITIAL_PAYMENT_DATA, SET_PORTFOLIO_LIST_DATA_IN_HOLDINGS } from "../constants/payments-contant";

const initialState: any = {
  initialPaymentData: { data: {} },
  portfolioListDataInHoldings: { data: {} }
}

const paymentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INITIAL_PAYMENT_DATA: {
      state = {
        ...state,
        initialPaymentData: { ...state.initialPaymentData, data: action.payload }
      }

      break;
    }
    case SET_PORTFOLIO_LIST_DATA_IN_HOLDINGS: {
      state = {
        ...state,
        portfolioListDataInHoldings: {
          ...state.portfolioListDataInHoldings,
          data: action.payload
        }
      }

      break;
    }
    default: {
      return state;
    }
  }

  return state;
}

export default paymentsReducer;

