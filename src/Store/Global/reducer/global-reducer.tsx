import { SET__DISABLE_BUTTON, SET__LOADING } from "../constants/global-constants";

const initialState: any = {
  disableButtonDuringApiFetching: false,
  loading: false
}

const globalReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case SET__DISABLE_BUTTON: {
      state.disableButtonDuringApiFetching = action?.payload;
      break;
    }
    case SET__LOADING: {
      state.loading = action?.payload;
      break;
    }
    default:
      break;
  }

  return state;
}

export default globalReducer;