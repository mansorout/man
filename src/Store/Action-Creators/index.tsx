

export const addMoney = (amount:number) => {
    return (dispatch : any) => {
        dispatch({
            type : "AddMoney",
            payload : amount
        })
    }
}


export const subMoney = (amount:number) => {
    return (dispatch:any) => {
        dispatch({
            type : "SubMoney",
            payload : amount
        })
    }
}

export const removeError = (msg:string) => {
    return (dispatch:any) => {
        dispatch({
            type : "RemoveError",
            payload : msg
        })
    }
}

export const addError = (msg:string) => {
    return (dispatch:any) => {
        dispatch({
            type : "AddError",
            payload : msg
        })
    }
}
 