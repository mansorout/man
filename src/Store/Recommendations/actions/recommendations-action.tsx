import { SET_MASTER_FUND_LIST_FOR_EXPLORE_FUNDS, SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT } from "../constants/recommendations-constant"

export const setInvestmentCardTypeAction = (data: any) => {
  return { type: "SET_INVESTMENT_TYPE", payload: data }
}

export const setOpenDetailDialogAction = (data: any) => {
  return { type: "OPEN_SAVE_DETAIL_DIALOG", payload: data }
}

export const setMutualFundListWrtUserAmountAction = (data: any) => {
  return { type: SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT, payload: data }
}

export const setMasterFundListForExploreFundsAction = (data: any) => {
  return { type: SET_MASTER_FUND_LIST_FOR_EXPLORE_FUNDS, payload: data };
}