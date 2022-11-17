import { initialState } from "./InitialState"

import * as t from './actionTypes'

const PanVerify = (state = {}, action: { type: string, payload: any }) => {
    switch(action.type){
        case 'PAN_VERIFICATION':
            return{
                ...action.payload,
                
            };
            default:
                return state;
    }
  
 };


export default PanVerify;