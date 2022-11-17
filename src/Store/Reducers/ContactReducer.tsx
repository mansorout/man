
type prop = {
    type : string,
    payload : string
}

const contactReducer = (state : string = '', action : prop) => {
    if (action.type === 'AddContact') {
        return action.payload
    }else {
        return state
    }
}

export default contactReducer;