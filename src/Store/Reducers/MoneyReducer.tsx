

type prop = {
    type : string,
    payload : number
}

const moneyReducer = (state : number = 0, action : prop) => {
    if (action.type === 'AddMoney') {
        return state + action.payload
    }  else {
        return state
    }
}

export default moneyReducer;