import { combineReducers } from "redux";
import moneyReducer from "./MoneyReducer";

const Reducers = combineReducers({
    money : moneyReducer
})

export default Reducers;