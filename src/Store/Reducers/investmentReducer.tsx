const objInitialState: any = {
  investment: { type: "" }
}

export default function investmentReducer(objState = objInitialState, action: any) {
  switch (action.type) {
    case 'SET_INVESTMENT_TYPE': {
      objState.investment = {
        ...objState.investment,
        ["type"]: action.payload
      }
      break;
    }
    default:
      return objState;
  }

  return objState;
}
