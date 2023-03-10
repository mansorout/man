import {
  SET_IS_REDEEM_VERIFIED,
  SET_IS_REDEEM_VERIFIED_ERROR,
  SET_IS_USER_AUTENTICATED,
  SET_LOGIN_DATA_ON_FAILED,
  SET_LOGIN_DATA_ON_SUCCESS,
  SET_TOKEN_EXPIRED_STATUS,
  SET_USER_PROFILE_VALIDATION_KEYS,
  SET_USER_VIEW_PROFILE_DATA
} from "../constants/auth-constants";

const initialState: any = {
  isTokenExpired: false,
  authUser: { isUserAuthenticated: false },
  login: { data: {}, error: "" },
  profile: { data: {}, error: "" },
  profileValidationData: {
    data: {
      isKycCompleted: false,
      isProfileComplete: false,
      isBseRegistered: false,
      isUserProfileFullCompleted: false
    }
  },
  redeemVerification: { isRedeemVerified: false, error: "" }
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_USER_AUTENTICATED: {
      state = {
        ...state,
        authUser: {
          ...state.authUser,
          isUserAuthenticated: action.payload
        }
      }
      // state.authUser = {
      //   ...state.authUser,
      //   isUserAuthenticated: action.payload
      // }
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
        // data: { hhello: "" }
        data: action.data
      }

      // console.log(state.profile, "state.profile");
      break;
    }
    case SET_TOKEN_EXPIRED_STATUS: {
      state.isTokenExpired = action.payload;
      break;
    }
    case SET_USER_PROFILE_VALIDATION_KEYS: {
      state.profileValidationData = {
        ...state.profileValidationData,
        data: action.payload
      }
      break;
    }
    case SET_IS_REDEEM_VERIFIED: {
      state.redeemVerification = {
        ...state.profileValidationData,
        isRedeemVerified: action.payload
      }
      break;
    }
    case SET_IS_REDEEM_VERIFIED_ERROR: {
      state.redeemVerification = {
        ...state.profileValidationData,
        error: action.payload
      }
      break;
    }
  }

  return state;
}

export default authReducer;

