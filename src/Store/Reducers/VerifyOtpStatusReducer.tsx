
type prop = {
    type : any,
    payload : any
}

const verifyOtpStatusReducer = (state : string = '', action : prop) => {
    if (action.type === 'VerifyOtpStatus') {
        return action.payload
    }else {
        return state
    }
}

export default verifyOtpStatusReducer;