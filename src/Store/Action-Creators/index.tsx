

export const addMoney = (amount:number) => {
    return (dispatch : any) => {
        dispatch({
            type : "AddMoney",
            payload : amount
        })
    }
}
