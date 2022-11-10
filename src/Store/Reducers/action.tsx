import * as t from './actionTypes'
import { mobileOtpLoginApi } from '../../APIs/apis'
import { mobileOtpVerifyApi } from '../../APIs/apis'

const setLoginState =(loginData:any)=>{
    console.log(loginData)
    return{
        type: t.SET_LOGIN_STATE,
        payload: loginData,
    }
}
const SET_VERIFY_STATE =(verifyData:any)=>{
    console.log(verifyData)
    return{
        type: t.SET_VERIFY_STATE,
        payload: verifyData,
    }
}



export const login = (loginInput:any) => {
    const { number } = loginInput;
    // console.log(number)
    return async (dispatch:any)=>{
                const result ={}
                try{
                    const result = await fetch(mobileOtpLoginApi,{
                        method:"POST",
                        headers: {  
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
export const verifycxotp = (verifyInput:any) => {
    const { otp ,number} = verifyInput;
    
    
    return async (dispatch:any)=>{
        console.log(number)
        console.log(otp)
                const result ={}
                try{
                    const result = await fetch(mobileOtpVerifyApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                          body:JSON.stringify({
                            "mobilenumber":number,
                            "mobileotp":otp,
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