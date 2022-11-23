const initialState:any=[]

export default function(state = initialState, action:any) {
  switch (action.type) {
    case 'BANKDETAILS_SUCCESS':
      return action.payload 
    default:
      return state;
  }
}



// const initialState:any=[]

// export default function(state = initialState, action:any) {
//   switch (action.type) {
//     case 'USERDETAILS_SUCCESS':
//       return action.payload 
//     default:
//       return state;
//   }
// }