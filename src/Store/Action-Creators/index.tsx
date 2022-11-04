

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