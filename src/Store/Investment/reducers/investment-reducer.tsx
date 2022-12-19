
// const initialState: any = {

// }

// const insuranceReducer = (state = initialState, action: any) => {

//   switch (action.type) {
//     case "": {
//       return action.payload
//     }
//   }
// }

// export default insuranceReducer;

const objInitialState: any = {
  investment: { type: "", openDetailDialog: false },
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
    case 'OPEN_SAVE_DETAIL_DIALOG': {
      objState.investment = {
        ...objState.investment,
        ["openDetailDialog"]: action.payload
      }
      break;
    }
    default:
      return objState;
  }

  return objState;
}


