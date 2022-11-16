import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers/index'
import loginReducer from './Reducers/LoginReducer'
import errorReducer from './Reducers/ErrorReducer'
import verifyReducer from './Reducers/VerifyReducer'
import contactReducer from './Reducers/ContactReducer'
import verifyOtpStatusReducer from './Reducers/VerifyOtpStatusReducer'



const rootReducer = combineReducers({
    error : errorReducer,
    loginReducer: loginReducer,
    verifyReducer: verifyReducer,
    contact: contactReducer,
    otpResponse:verifyOtpStatusReducer

})

export const store = createStore(
    rootReducer,
    
    applyMiddleware(thunk),
    
   
)