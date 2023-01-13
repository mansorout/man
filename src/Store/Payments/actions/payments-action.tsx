import { SET_INITIAL_PAYMENT_DATA } from "../constants/payments-contant"

export const setInitialPaymentDataAction = (data: { orderId: string, paymentModes: number[], totalAmount: string }) => {
    return { type: SET_INITIAL_PAYMENT_DATA, payload: data }
}