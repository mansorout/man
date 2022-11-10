import * as t from './actionTypes'

const setLoginState =(loginData:any)=>{
    console.log(loginData)
    return{
        type: t.SET_LOGIN_STATE,
        payload: loginData,
    }
}

export const login = (loginInput:any) => {
    const { number } = loginInput;
    console.log(number)
    return async (dispatch:any)=>{
                const result ={}
                try{
                    const result = await fetch('http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/otp/send',{
                        method:"POST",
                        headers: {  // these could be different for your API call
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                          body:JSON.stringify({
                            "mobilenumber":number,
                            "type":"auth"
                          })
                          
                    })
                   
                    
                } catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)
                }
                return result
    };
}