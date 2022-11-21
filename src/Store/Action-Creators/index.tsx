

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
export const addSignature = (signdata:string) => {
    return (dispatch:any) => {
        dispatch({
            type:"AddCheque",
            payload:signdata
        })
    }
}

export const AddCheque = (chequeimage:string) => {
    return (dispatch:any) => {
        dispatch({
            type:"AddCheque",
            payload:chequeimage
        })
    }
}
export const ResendOTP = (resenddata:string) => {
    return (dispatch:any) => {
        dispatch({
            type:"AddRefreshToken",
            payload:resenddata
        })
    }
}
 