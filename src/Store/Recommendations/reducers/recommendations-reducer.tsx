import { SET_MUTUAL_FUND_LIST_WRT_USER_AMOUNT } from "../constants/recommendations-constant";

const objInitialState: any = {
  investment: { type: "", openDetailDialog: false },
  mutaulFundListWrtUserAmount: { data: {} }
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
      objState.investment = {
        ...objState.mutaulFundListWrtUserAmount,
        data: action.payload
      }
      break;
    }
    default:
      return objState;
  }

  return objState;
}


