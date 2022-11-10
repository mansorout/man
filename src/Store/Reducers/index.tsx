import { combineReducers } from "redux";
import contactReducer from "./ContactReducer";
import errorReducer from "./ErrorReducer";
import moneyReducer from "./MoneyReducer";

const Reducers = combineReducers({
    money : moneyReducer,
    error : errorReducer,
    contact : contactReducer
})

export default Reducers;
