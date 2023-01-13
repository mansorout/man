import { SET_INITIAL_PAYMENT_DATA } from "../constants/payments-contant";

const initialState: any = {
  initialPaymentData: { data: {} }
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
    default: {
      return state;
    }
  }

  return state;
}

export default paymentsReducer;

