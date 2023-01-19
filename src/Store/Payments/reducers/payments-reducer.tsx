import { SET_INITIAL_PAYMENT_DATA, SET_ORDER_REDEEM_DATA, SET_PORTFOLIO_LIST_DATA_IN_HOLDINGS, SET_TRANSACTION_LIST_DATA_FOR_PORTFOLIO } from "../constants/payments-contant";

const initialState: any = {
  initialPaymentData: { data: {} },
  portfolioListDataInHoldings: { data: {} },
  orderRedeemData: { data: {} },
  transactionListDataInPortfolio: { data: [] }
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
    case SET_ORDER_REDEEM_DATA: {
      state = {
        ...state,
        orderRedeemData: {
          ...state.orderRedeemData,
          data: action.payload
        }
      }

      break;
    }
    case SET_TRANSACTION_LIST_DATA_FOR_PORTFOLIO: {
      state = {
        ...state,
        transactionListDataInPortfolio: {
          ...state.transactionListDataInPortfolio,
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

