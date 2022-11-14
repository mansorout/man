import { initialState } from "./InitialState"

import * as t from './actionTypes'

const verifyReducer = (state = initialState,action:any)=>{
    switch(action.type){
        case t.SET_VERIFY_STATE:
            return{
                ...state,
                ...action.payload,
                isVerified:true,
            };
            default:
                return state;
    }
  
 };


export default verifyReducer;