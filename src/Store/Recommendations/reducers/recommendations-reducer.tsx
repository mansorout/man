import { SET_MASTER_FUND_LIST_FOR_EXPLORE_FUNDS, SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT, SET_SELECTED_FUNDS_FOR_INVESTMENT } from "../constants/recommendations-constant";

const objInitialState: any = {
  investment: { type: "", openDetailDialog: false },
  mutaulFundListWrtUserAmount: { data: {} },
  masterFundListForExploreFunds: { data: [], isFundPurchased: true },
  selectedFundsForInvestment: { data: {} }
}

export default function recommendationsReducer(objState = objInitialState, action: any) {
  switch (action.type) {
    case 'SET_INVESTMENT_TYPE': {
      objState.investment = {
        ...objState.investment,
        ["type"]: action.payload
      }
      break;
    }
    case 'OPEN_SAVE_DETAIL_DIALOG': {
      objState.investment = {
        ...objState.investment,
        ["openDetailDialog"]: action.payload
      }
      break;
    }
    case SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT: {
      objState.mutaulFundListWrtUserAmount = {
        ...objState.mutaulFundListWrtUserAmount,
        data: action.payload
      }
      break;
    }
    case SET_MASTER_FUND_LIST_FOR_EXPLORE_FUNDS: {
      objState.masterFundListForExploreFunds = {
        ...objState.masterFundListForExploreFunds,
        data: action.payload
      }
      break;
    }
    case SET_SELECTED_FUNDS_FOR_INVESTMENT: {
      objState.selectedFundsForInvestment = {
        ...objState.selectedFundsForInvestment,
        data: action.payload
      }
      break;
    }
    default:
      return objState;
  }

  return objState;
}


