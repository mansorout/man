import { SET_CITY_LIST, SET_INCOMESLAB_LIST, SET_STATE_LIST, SET__DISABLE_BUTTON, SET__LOADING,SET_COMMON_MSG } from "../constants/global-constants";

const initialState: any = {
  disableButtonDuringApiFetching: false,
  loading: false,
  stateList: [],
  cityList: [],
  incomeSlabList: [],
  commonmsg: ""
}

const globalReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case SET__DISABLE_BUTTON: {
      state.disableButtonDuringApiFetching = action?.payload;
      break;
    }
    case SET__LOADING: {
      console.log(action?.payload, "SET__LOADING")
      state.loading = action?.payload;
      break;
    }
    case SET_STATE_LIST: {
      state.stateList = action.payload;
      break;
    }
    case SET_CITY_LIST: {
      state.cityList = action.payload;
      break;
    }
    case SET_INCOMESLAB_LIST: {
      state.incomeslabList = action.payload;
      break;
    }
    case SET_COMMON_MSG :{
     state.commonmsg=action.payload
     break;
    }
    default:
      break;
  }

  return state;
}

export default globalReducer;