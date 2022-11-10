import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers/index'
import loginReducer from './Reducers/LoginReducer'
import errorReducer from './Reducers/ErrorReducer'


const rootReducer = combineReducers({
    error : errorReducer,
    loginReducer: loginReducer,
})

export const store = createStore(
    rootReducer,
    
    applyMiddleware(thunk),
    
   
)