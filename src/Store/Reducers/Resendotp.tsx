
const initialState:any=[]

export default function(state = initialState, action:any) {
  switch (action.type) {
    case 'RESEND_OTP_SUCCESS':
      return action.payload 
    default:
      return state;
  }
}