import * as t from './actionTypes'
import { mobileOtpLoginApi } from '../../APIs/apis'
import { mobileOtpVerifyApi } from '../../APIs/apis'
import { uploadSignatureApi } from '../../APIs/apis'
import { uploadChequeApi } from '../../APIs/apis'
import {userDetailsApi} from '../../APIs/apis'
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
                     console.log(err)
                }
                return result

                
    };

}
export const verifycxotp = (verifyInput:any) => {
    const { otp ,number} = verifyInput;
    

    return async (dispatch:any)=>{
        console.log(number, "number")
        console.log(otp, "otp")
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
                            "otp":otp,
                            "type":"auth"
                          })
                      }).then((response) => response.json())
                    .then((data) => {
                
                      console.log(data.data.accesstoken);
                      // console.log(data.userInfo.userdetails.mobilenumber)
                      console.log(data.error)
                      console.log(data.accesstoken)
                      localStorage.setItem("accesstoken",data.data.accesstoken)
                      dispatch({
                        type:'LOGIN_SUCCESS',
                        payload:data
                      })
                        
                    })
                } 
                catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)}

        return result
    };

    
}
export const uploadsignature = (singatureInput:any) => {
    const {signdata} = singatureInput;
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
      const result ={}
                try{
                    const result = await fetch(uploadSignatureApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                           "signature":signdata,
                            })
                        }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      console.log(data)
                      // dispatch({
                      //   type:'SIGNATURE_UPLOAD_SUCCESS',
                      //   payload:data
                      // })
                        
                    })
                } 
                catch (err){ console.log(err)}

        return result
    };

    
}
export const uploadcheque = (chequeInput:any) => {
    const {chequedata} = chequeInput;
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
      const result ={}
                try{
                    const result = await fetch(uploadChequeApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                           "signature":chequedata,
                            })
                        }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      console.log(data)
                      // dispatch({
                      //   type:'CHEQUE_UPLOAD_SUCCESS',
                      //   payload:data
                      // })
                        
                    })
                } 
                catch (err){
                     
                     console.log(err)}

        return result
    };

    
}

 
export const submituserdetails = (userdetails:any) => {
    const { userdata} = userdetails;
    console.log(userdata);
  
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
       
                const result ={}
                try{
                    const result = await fetch(userDetailsApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                           "firstname":userdata.firstName,
                           "middlename":userdata.middleName,
                           "lastname":userdata.lastName,
                           "emailaddress":userdata.emailaddress,
                           "mobilenumber":userdata.mobilenumber,
                           "dateofbirth":userdata.dateofbirth,
                           "image":"",
                           "gender":userdata.gender,
                           "addressline1":userdata.addressline1,
                           "addressline2":"",
                           "pincode":userdata.pincode,
                           "incomeslab":userdata.IncomeSlab
                           
                        })
                          
                    
                    }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      dispatch({
                        type:'USERDETAILS_SUCCESS',
                        payload:data
                      })
                        
                    })
                } 
                catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)}

        return result
    };

    
}

 