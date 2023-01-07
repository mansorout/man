import { SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT } from "../constants/recommendations-constant"

export const setInvestmentCardTypeAction = (data: any) => {
  return { type: "SET_INVESTMENT_TYPE", payload: data }
}

export const setOpenDetailDialogAction = (data: any) => {
  return { type: "OPEN_SAVE_DETAIL_DIALOG", payload: data }
}

export const setMutualFundListWrtUserAmountAction = (data: any) => {
  return { type: SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT, payload: data }
}