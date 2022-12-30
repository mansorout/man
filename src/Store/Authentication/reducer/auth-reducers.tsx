import { SET_IS_USER_AUTENTICATED, SET_LOGIN_DATA, SET_LOGIN_FAILED, SET_LOGIN_SUCCESS, SET_TOKEN_EXPIRED_STATUS, SET_USER_VIEW_PROFILE_DATA } from "../constants/auth-constants";

const initialState: any = {
  authUser: { isUserAuthenticated: false },
  login: { data: {}, loading: false, error: "" },
  profile: { data: {} },
  isTokenExpired: false
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_USER_AUTENTICATED: {
      state.authUser = {
        ...state.authUser,
        isUserAuthenticated: action.payload
      }
      break;
    }
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
    case SET_USER_VIEW_PROFILE_DATA: {
    
      state.profile = {
        ...state.profile,
        data: action.payload
      }

      break;
    }
    case SET_TOKEN_EXPIRED_STATUS: {
      state.isTokenExpired = action.payload;
      break;
    }
  }

  return state;
}

export default authReducer;

