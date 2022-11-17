import { initialState } from "./InitialState"

import * as t from './actionTypes'

const EdirprofileReducer = (state = initialState,action:any)=>{
    switch(action.type){
        case t.SET_EDIT_STATE:
            return{
                ...state,
                ...action.payload,
            };
            default:
                return state;
    }
  
 };


export default EdirprofileReducer;