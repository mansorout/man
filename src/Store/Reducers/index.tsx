import { combineReducers } from "redux";
import contactReducer from "./ContactReducer";
import errorReducer from "./ErrorReducer";
import moneyReducer from "./MoneyReducer";
import verifyOtpStatusReducer from "./VerifyOtpStatusReducer";

const Reducers = combineReducers({
    money : moneyReducer,
    error : errorReducer,
    contact : contactReducer,
    otpResponse : verifyOtpStatusReducer 
})

export default Reducers;
