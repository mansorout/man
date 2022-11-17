

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

export const addContactNumber = (num:string) => {
    return (dispatch:any) => {
        dispatch({
            type:"AddContact",
            payload:num
        })
    }
}
export const addUserDEtails = (userdata:any) => {
    return (dispatch:any) => {
        dispatch({
            type:"AddUserData",
            payload:userdata
        })
    }
}
 