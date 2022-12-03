import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers/index'
import loginReducer from './Reducers/LoginReducer'
import errorReducer from './Reducers/ErrorReducer'
import verifyReducer from './Reducers/VerifyReducer'
import contactReducer from './Reducers/ContactReducer'
import verifyOtpStatusReducer from './Reducers/VerifyOtpStatusReducer'
import UploadSignatureReducer from './Reducers/UploadSignatureReducer'
import PanVerify from './Reducers/PanVerify'
import NomineeAdd from './Reducers/NomineeAdd'
import UploadChequeReducer from './Reducers/UploadChequeReducer'
import { NavToggleReducer } from './Duck/NavToggle'
import { PinModalHome } from './Duck/PINModalHome'




const rootReducer = combineReducers({
    error: errorReducer,
    loginReducer: loginReducer,
    verifyReducer: verifyReducer,
    contact: contactReducer,
    otpResponse: verifyOtpStatusReducer,
    uploadSignature: UploadSignatureReducer,
    pan: PanVerify,
    nominee: NomineeAdd,
    uploadCheque: UploadChequeReducer,
    NavToggleReducer: NavToggleReducer,
    PinModalHome : PinModalHome,
})

export const store = createStore(
    rootReducer,

    applyMiddleware(thunk),


)