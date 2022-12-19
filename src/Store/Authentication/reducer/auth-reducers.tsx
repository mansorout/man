import { SET_LOGIN_DATA, SET_LOGIN_FAILED, SET_LOGIN_SUCCESS } from "../constants/auth-constants";

const initialState: any = {
  login: { data: {}, loading: false, error: "" }
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGIN_DATA: {
      state.login = {
        ...state.login,
        data: action.payload
      }
      break;
    }
    case SET_LOGIN_SUCCESS: {
      // return action.payload

      break;
    }
    case SET_LOGIN_FAILED: {
      // return action.payload
      // toast.warn(globalConstant.ERROR_OCCURRED);
      break
    }
  }

  return state;
}

export default authReducer;

