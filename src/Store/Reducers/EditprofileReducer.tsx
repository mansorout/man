
const initialState:any=[]

export default function(state = initialState, action:any) {
  switch (action.type) {
    case 'USERDETAILS_SUCCESS':
      return action.payload 
    default:
      return state;
      
  }
}