
type prop = {
    type : string,
    payload : string
}

const errorReducer = (state : string[] = [], action : prop) => {
    if (action.type === 'AddError') {
        return [...state, action.payload]
    } else if (action.type === 'RemoveError') {
        return state.filter((message)=>message!=action.payload)
    }else {
        return state
    }
}

export default errorReducer;