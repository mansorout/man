import { SET__DISABLE_BUTTON } from "../constants/global-constants";

const initialState: any = {
  disableButtonDuringApiFetching: false,
}

const globalReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case SET__DISABLE_BUTTON: {
      state.disableButtonDuringApiFetching = action?.payload;
      break;
    }
    default:
      break;
  }

  return state;
}

export default globalReducer;