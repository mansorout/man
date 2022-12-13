import { initialState } from "./InitialState"

import * as t from './actionTypes'
type prop = {
    type : string,
    payload : string
}
const UserDetailsReducer = (state : string = '', action : prop)=>{
    if (action.type === 'UserDetails') {
        return action.payload
    }else {
        return state
    }
  
 };


export default UserDetailsReducer;