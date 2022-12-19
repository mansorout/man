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
import { InsuranceTermConditionReducer } from './Duck/InsuranceTermCondition'
import { composeWithDevTools } from 'redux-devtools-extension';
import { PinModalHome } from './Duck/PINModalHome'
import { ULIPCompare } from './Duck/ULIPCompare'
import { FilterBox } from './Duck/FilterBox'
import { SaveTaxInvestmentTypeReducers } from './Duck/SaveTaxInvestmentType'
import { submituserdetails } from './Reducers/action'
import UserDetailsReducer from './Reducers/UserDetailsReducer'
import authReducer from './Authentication/reducer/auth-reducers'
import exploreFundReducer from './Explore funds/reducers/explore-funds-reducer'
import insuranceReducer from './Home/Insurance/reducers/insurance-reducer'
import investmentReducer from './Home/Investment/reducers/investment-reducer'
import portfolioReducer from './Portfolio/reducers/protfolio-reducer'
// import investmentReducer from './Reducers/investmentReducer'




const rootReducer = combineReducers({
    filterbox: FilterBox,
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
    InsuranceTermConditionReducer: InsuranceTermConditionReducer,
    PinModalHome: PinModalHome,
    ULIPCompare: ULIPCompare,
    investment: investmentReducer,
    SaveTaxInvestmentType: SaveTaxInvestmentTypeReducers,
    userProfileDetails: UserDetailsReducer,

    authReducer: authReducer,
    exploreFundReducer: exploreFundReducer,
    insuranceReducer: insuranceReducer,
    investmentReducer: investmentReducer,
    portfolioReducer: portfolioReducer


})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)