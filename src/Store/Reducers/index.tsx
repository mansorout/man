import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import moneyReducer from "./MoneyReducer";

const Reducers = combineReducers({
    money : moneyReducer,
    error : errorReducer
})

export default Reducers;