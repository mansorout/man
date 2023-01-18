import { SET_INITIAL_PAYMENT_DATA, SET_PORTFOLIO_LIST_DATA_IN_HOLDINGS } from "../constants/payments-contant"

export const setInitialPaymentDataAction = (data: { orderId: string, paymentModes: number[], totalAmount: string }) => {
    return { type: SET_INITIAL_PAYMENT_DATA, payload: data }
}

export const setPortfolioListDataInHoldingsAction = (data: any) => {
    return { type: SET_PORTFOLIO_LIST_DATA_IN_HOLDINGS, payload: data }
}