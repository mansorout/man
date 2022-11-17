import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers/index'
import loginReducer from './Reducers/LoginReducer'
import errorReducer from './Reducers/ErrorReducer'
import verifyReducer from './Reducers/VerifyReducer'
import contactReducer from './Reducers/ContactReducer'
import verifyOtpStatusReducer from './Reducers/VerifyOtpStatusReducer'
import UploadSignatureReducer from './Reducers/UploadSignatureReducer'
import UploadChequeReducer from './Reducers/UploadChequeReducer'



const rootReducer = combineReducers({
    error : errorReducer,
    loginReducer: loginReducer,
    verifyReducer: verifyReducer,
    contact: contactReducer,
    otpResponse:verifyOtpStatusReducer,
    uploadSignature:UploadSignatureReducer,
    uploadCheque:UploadChequeReducer

})

export const store = createStore(
    rootReducer,
    
    applyMiddleware(thunk),
    
   
)