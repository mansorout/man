import { initialState } from "./InitialState"

import * as t from './actionTypes'

const loginReducer = (state = initialState,action:any)=>{
    switch(action.type){
        case t.SET_LOGIN_STATE:
            return{
                ...state,
                ...action.payload,
                isLoggedIn:true,
            };
            default:
                return state;
    }
  
 };


export default loginReducer;