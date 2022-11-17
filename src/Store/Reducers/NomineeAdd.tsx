import { initialState } from "./InitialState"

import * as t from './actionTypes'

const NomineeAdd = (state = {}, action: { type: string, payload: any }) => {
    switch(action.type){
        case 'NOMINEE_ADD':
            return{
                ...action.payload,
                
            };
            default:
                return state;
    }
  
};

export default NomineeAdd;