import {
  SET_IS_USER_AUTENTICATED,
  SET_LOGIN_DATA_ON_FAILED,
  SET_LOGIN_DATA_ON_SUCCESS,
  SET_TOKEN_EXPIRED_STATUS,
  SET_USER_VIEW_PROFILE_DATA
} from "../constants/auth-constants";

const initialState: any = {
  isTokenExpired: false,
  authUser: { isUserAuthenticated: false },
  login: { data: {}, error: "" },
  profile: { data: {}, error: "" },
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
    case SET_LOGIN_DATA_ON_SUCCESS: {
      state.login = {
        ...state.login,
        data: action.payload,
        error: ""
      }
      break;
    }
    case SET_LOGIN_DATA_ON_FAILED: {
      state.login = {
        ...state.login,
        error: action.payload
      }
      break
    }
    case SET_USER_VIEW_PROFILE_DATA: {

      state.profile = {
        ...state.profile,
        data: { hhello: "" }
        // data: action.data
      }

      console.log(state.profile, "state.profile");
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

