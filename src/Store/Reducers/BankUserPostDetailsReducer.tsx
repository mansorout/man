const initialState:any=[]

export default function(state = initialState, action:any) {
  switch (action.type) {
    case 'BANKPOSTDETAILS_SUCCESS':
      return action.payload 
    default:
      return state;
  }
}